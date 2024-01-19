import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeModalEventService } from 'src/app/services/employee-modal-event/employee-modal-event.service';
import { Employee } from 'src/types/employee';
import { ModalTypes } from 'src/types/modalTypes';

@Component({
  selector: 'app-base-modal',
  template: '',
  styleUrls: ['../modals.css'],
})
export abstract class BaseModalComponent implements OnInit {
  @Input() employee: Employee | undefined;
  @Output() closeModal = new EventEmitter();
  public abstract readonly mode: ModalTypes;

  constructor(protected modalEventService: EmployeeModalEventService) {}

  abstract ngOnInit(): void;

  submit(form?: NgForm) {
    this.modalEventService.emit({
      data: form?.value ?? this.employee,
      modal: this.mode,
      event: 'confirm',
    });
  }
}
