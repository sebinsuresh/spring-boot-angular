import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeModalEvent, ModalTypes } from 'src/types/modalTypes';
import { Employee } from '../../../types/employee';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css'],
})
export class EmployeeCardComponent implements OnInit {
  @Input() employee: Employee | undefined;
  @Output() onModalEvent = new EventEmitter<EmployeeModalEvent>();

  constructor() {}

  ngOnInit(): void {}

  openModal(mode: ModalTypes) {
    if (!this.employee) {
      console.error('Employee not set on card');
      return;
    }
    this.onModalEvent.emit({ data: this.employee, modal: mode, event: 'open' });
  }
}
