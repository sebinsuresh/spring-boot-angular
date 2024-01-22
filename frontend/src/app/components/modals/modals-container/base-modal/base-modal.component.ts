import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Select } from '@ngxs/store';
import { EMPTY, Observable, take } from 'rxjs';
import { EmployeeModalEventService } from 'src/app/services/employee-modal-event/employee-modal-event.service';
import { EmployeeState } from 'src/app/states/employee/employee.state';
import { Employee } from 'src/types/employee';
import { ModalTypes } from 'src/types/modalTypes';

@Component({
  selector: 'app-base-modal',
  template: '',
  styleUrls: ['../modals.css'],
})
export abstract class BaseModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter();
  @Select(EmployeeState.currentEmployee) public employee$: Observable<Employee> | undefined;
  public abstract readonly mode: ModalTypes;

  constructor(public element: ElementRef, protected modalEventService: EmployeeModalEventService) {}

  abstract ngOnInit(): void;

  submit(form?: NgForm) {
    (this.employee$ ?? EMPTY).pipe(take(1)).subscribe({
      next: (employee) => {
        this.modalEventService.emit({
          data: form?.value ?? employee,
          modal: this.mode,
          event: 'confirm',
        });
      },
    });
  }
}
