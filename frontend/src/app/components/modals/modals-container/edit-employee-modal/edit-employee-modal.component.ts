import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/types/employee';
import { ModalTypes } from 'src/types/modalTypes';

@Component({
  selector: 'app-edit-employee-modal',
  templateUrl: './edit-employee-modal.component.html',
  styleUrls: ['../modals.css'],
})
export class EditEmployeeModalComponent implements OnInit {
  // TODO: Refactor these using Directive? https://stackoverflow.com/a/70099300
  @Input() employee: Employee | undefined;
  @Output() closeModal = new EventEmitter();
  @Output() onSubmit = new EventEmitter<NgForm>();

  public static readonly mode: ModalTypes = 'edit';

  constructor() {}

  ngOnInit(): void {}
}
