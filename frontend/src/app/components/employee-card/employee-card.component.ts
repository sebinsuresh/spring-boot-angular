import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetCurrentEmployee } from 'src/app/states/employee/employee.action';
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

  constructor(private store: Store) {}

  ngOnInit(): void {}

  openModal(mode: ModalTypes) {
    if (!this.employee) {
      console.error('Employee not set on card');
      return;
    }
    this.store.dispatch(new SetCurrentEmployee(this.employee));
    this.onModalEvent.emit({ data: this.employee, modal: mode, event: 'open' });
  }
}
