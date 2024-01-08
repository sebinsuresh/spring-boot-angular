import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-employee-modal',
  templateUrl: './add-employee-modal.component.html',
  styleUrls: ['../modals.css'],
})
export class AddEmployeeModalComponent implements OnInit {
  // TODO: Refactor inputs using Directive? https://stackoverflow.com/a/70099300

  @Output() closeModal = new EventEmitter();
  @Output() onSubmit = new EventEmitter<NgForm>();

  constructor() {}

  ngOnInit(): void {
    if (!this.closeModal || !this.closeModal) {
      throw new Error('required input functions not provided');
    }
  }
}
