import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ModalModes } from 'src/types/modalModes';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public displayedEmployees: Employee[] = [];
  private employees: Employee[] = [];
  public currentEmployee: Employee | null = null;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next: (response) => {
        this.employees = response;
        this.employees.sort((employee1, employee2) => employee1.id - employee2.id);
        this.displayedEmployees = this.employees;
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.message);
        this.employees = [];
      },
    });
  }

  public logMessage(...args: any[]) {
    console.log(...args);
  }

  public onOpenModal(employee: Employee | null, mode: ModalModes) {
    this.currentEmployee = employee;

    const modalContainer = document.getElementById('modals-container');
    if (!modalContainer) {
      console.error('modal container not found');
      return;
    }
    modalContainer.style.display = 'block';

    const modal = document.getElementById(`${mode}Employee`);
    if (!modal) {
      console.error(`modal for ${mode} not found`);
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
    const key = (event.target as HTMLInputElement)?.value?.trim().toLowerCase();
    if (!key) this.displayedEmployees = this.employees;

    this.displayedEmployees = this.employees.filter(
      (e) =>
        e.email.toLowerCase().indexOf(key) !== -1 ||
        e.name.toLowerCase().indexOf(key) !== -1 ||
        e.jobTitle.toLowerCase().indexOf(key) !== -1,
    );
  }
}
