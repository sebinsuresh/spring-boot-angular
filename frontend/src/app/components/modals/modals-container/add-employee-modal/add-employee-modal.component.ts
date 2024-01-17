import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeModalEventService } from 'src/app/services/employee-modal-event/employee-modal-event.service';
import { ModalTypes } from 'src/types/modalTypes';

@Component({
  selector: 'app-add-employee-modal',
  templateUrl: './add-employee-modal.component.html',
  styleUrls: ['../modals.css'],
})
export class AddEmployeeModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter();

  public static readonly mode: ModalTypes = 'add';

  constructor(private modalEventService: EmployeeModalEventService) {}

  ngOnInit(): void {}

  submit(form: NgForm) {
    this.modalEventService.emit({
      data: form.value,
      event: 'confirm',
      modal: AddEmployeeModalComponent.mode,
    });
    form.reset();
  }
}
