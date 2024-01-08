import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../../types/employee';
import { EmployeeModalEvent, ModalModes } from 'src/types/modalTypes';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css'],
})
export class EmployeeCardComponent implements OnInit {
  @Input() employee: Employee | undefined;
  @Output() openModal = new EventEmitter<EmployeeModalEvent>();

  constructor() {}

  ngOnInit(): void {}

  onModalEvent(mode: ModalModes) {
    if (!this.employee) {
      console.error('Employee not set on card');
      return;
    }
    this.openModal.emit({ data: this.employee, mode: mode });
  }
}
