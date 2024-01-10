import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { ModalEvent, ModalModes } from 'src/types/modalTypes';

@Component({
  selector: 'app-add-employee-modal',
  templateUrl: './add-employee-modal.component.html',
  styleUrls: ['../modals.css'],
})
export class AddEmployeeModalComponent implements OnInit {
  // TODO: Refactor inputs using Directive? https://stackoverflow.com/a/70099300

  @Input() modalEvent$?: Subject<ModalEvent>;
  @Output() closeModal = new EventEmitter();
  @Output() onSubmit = new EventEmitter<NgForm>();

  public static readonly mode: ModalModes = 'add';

  constructor() {}

  ngOnInit(): void {
    if (!this.closeModal || !this.closeModal) {
      throw new Error('required input functions not provided');
    }
    this.modalEvent$?.subscribe((evt) => {
      if (evt.modal === AddEmployeeModalComponent.mode) {
      }
    });
  }
}
