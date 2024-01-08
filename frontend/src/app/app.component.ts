import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeModalEvent } from 'src/types/modalTypes';
import { Employee } from '../types/employee';
import { EmployeeCrudService } from './services/employee-crud/employee-crud.service';
import { EmployeeSearchService } from './services/employee-search/employee-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public displayedEmployees: Employee[] = [];
  public allEmployees: Employee[] = [];
  public currentEmployee: Employee | null = null;

  constructor(
    private employeeService: EmployeeCrudService,
    private employeeSearchService: EmployeeSearchService,
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next: (response) => {
        this.allEmployees = response;
        this.allEmployees.sort((employee1, employee2) => employee1.id - employee2.id);
        this.displayedEmployees = this.allEmployees;
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.message);
        this.allEmployees = [];
      },
    });
  }

  public onOpenModal(event: EmployeeModalEvent) {
    this.currentEmployee = event.data;

    const modalContainer = document.getElementById('modals-container');
    if (!modalContainer) {
      console.error('modal container not found');
      return;
    }
    modalContainer.style.display = 'block';

    const modal = document.getElementById(`${event.mode}Employee`);
    if (!modal) {
      console.error(`modal for ${event.mode} not found`);
      return;
    }
    modal.style.display = 'block';
  }

  public closeAllModals() {
    const modals = document.querySelectorAll(`#modals-container .modal`);
    modals.forEach((modal) => {
      if (!modal || !(modal instanceof HTMLElement)) return;
      modal.style.display = 'none';
    });

    const modalContainer = document.getElementById('modals-container');
    if (!modalContainer) {
      console.error('modal container not found');
      return;
    }
    modalContainer.style.display = 'none';
  }

  public onAddEmployee(form: NgForm) {
    this.closeAllModals();
    this.employeeService
      .addEmployee(form.value)
      .subscribe({
        next: () => {
          this.getEmployees();
        },
        error: (error) => {
          console.error(error);
        },
      })
      .add(() => {
        form.resetForm();
      });
  }

  public onEditEmployee(employee: Employee | null) {
    if (!employee) {
      console.error('No employee selected for edit');
      return;
    }

    this.closeAllModals();
    this.employeeService.updateEmployee(employee).subscribe({
      next: () => {
        this.getEmployees();
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  public onDeleteEmployee(employee: Employee | null) {
    if (!employee) {
      console.error('No employee selected for edit');
      return;
    }

    this.closeAllModals();
    this.employeeService.deleteEmployee(employee.id).subscribe({
      next: () => {
        this.getEmployees();
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  public onSearchEmployee(event: Event) {
    const key = (event.target as HTMLInputElement)?.value;
    this.displayedEmployees = this.employeeSearchService.findEmployees(this.allEmployees, key);
  }
}
