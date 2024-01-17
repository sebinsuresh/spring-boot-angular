import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeModalEventService } from 'src/app/services/employee-modal-event/employee-modal-event.service';
import { Employee } from 'src/types/employee';
import { ModalTypes } from 'src/types/modalTypes';

@Component({
  selector: 'app-edit-employee-modal',
  templateUrl: './edit-employee-modal.component.html',
  styleUrls: ['../modals.css'],
})
export class EditEmployeeModalComponent implements OnInit {
  @Input() employee: Employee | undefined;
  @Output() closeModal = new EventEmitter();

  public static readonly mode: ModalTypes = 'edit';

  constructor(private modalEventService: EmployeeModalEventService) {}

  ngOnInit(): void {}

  submit(form: NgForm) {
    this.modalEventService.emit({
      data: form.value,
      modal: EditEmployeeModalComponent.mode,
      event: 'confirm',
    });
  }
}
