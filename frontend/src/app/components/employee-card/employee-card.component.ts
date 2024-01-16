import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalEvent, ModalTypes } from 'src/types/modalTypes';
import { Employee } from '../../../types/employee';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css'],
})
export class EmployeeCardComponent implements OnInit {
  @Input() employee: Employee | undefined;
  @Output() openModal = new EventEmitter<ModalEvent>();

  constructor() {}

  ngOnInit(): void {}

  onModalEvent(mode: ModalTypes) {
    if (!this.employee) {
      console.error('Employee not set on card');
      return;
    }
    this.openModal.emit({ data: this.employee, modal: mode, event: 'open' });
  }
}
