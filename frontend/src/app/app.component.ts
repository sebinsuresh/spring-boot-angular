import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalEvent } from 'src/types/modalTypes';
import { Employee } from '../types/employee';
import { ModalsContainerComponent } from './components/modals/modals-container/modals-container.component';
import { EmployeeCrudService } from './services/employee-crud/employee-crud.service';
import { EmployeeSearchService } from './services/employee-search/employee-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild(ModalsContainerComponent) private modalsContainerRef!: ModalsContainerComponent;

  public displayedEmployees: Employee[] = [];
  public allEmployees: Employee[] = [];

  constructor(
    private employeeService: EmployeeCrudService,
    private employeeSearchService: EmployeeSearchService,
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(): void {
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

  public onAddEmployee(form: NgForm) {
    this.closeModals();
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

  public onEditEmployee(form: NgForm) {
    this.closeModals();
    this.employeeService.updateEmployee(form.value).subscribe({
      next: () => {
        this.getEmployees();
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  public onDeleteEmployee(employee: Employee | undefined) {
    if (!employee) {
      console.error('No employee selected for delete');
      return;
    }

    this.closeModals();
    this.employeeService.deleteEmployee(employee.id).subscribe({
      next: () => {
        this.getEmployees();
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  public onOpenModal(event: ModalEvent) {
    this.modalsContainerRef.onOpenModal(event);
  }

  public onSearchEmployee(event: Event) {
    const key = (event.target as HTMLInputElement)?.value;
    this.displayedEmployees = this.employeeSearchService.findEmployees(this.allEmployees, key);
  }

  private closeModals() {
    this.modalsContainerRef.closeAllModals();
  }
}
