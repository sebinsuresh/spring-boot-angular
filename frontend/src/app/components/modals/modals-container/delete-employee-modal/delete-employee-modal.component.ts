import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/types/employee';

@Component({
  selector: 'app-delete-employee-modal',
  templateUrl: './delete-employee-modal.component.html',
  styleUrls: ['../modals.css'],
})
export class DeleteEmployeeModalComponent implements OnInit {
  // TODO: Refactor these using Directive? https://stackoverflow.com/a/70099300
  @Output() closeModal = new EventEmitter();
  @Output() onDeleteEmployee = new EventEmitter<Employee>();
  @Input() employee: Employee | undefined;

  constructor() {}

  ngOnInit(): void {
    if (!this.closeModal || !this.onDeleteEmployee) {
      throw new Error('required input functions not provided');
    }
  }

  // TODO: Add countdown confirmation for modal button
}
