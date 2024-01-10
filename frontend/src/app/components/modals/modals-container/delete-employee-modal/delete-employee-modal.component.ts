import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Employee } from 'src/types/employee';
import { ModalEvent, ModalModes } from 'src/types/modalTypes';

@Component({
  selector: 'app-delete-employee-modal',
  templateUrl: './delete-employee-modal.component.html',
  styleUrls: ['../modals.css'],
})
export class DeleteEmployeeModalComponent implements OnInit {
  // TODO: Refactor these using Directive? https://stackoverflow.com/a/70099300
  @Input() employee: Employee | undefined;
  @Input() modalEvent$?: Subject<ModalEvent>;
  @Output() closeModal = new EventEmitter();
  @Output() onDeleteEmployee = new EventEmitter<Employee>();

  public static readonly mode: ModalModes = 'delete';
  public confirmCountDownToggle$ = new Subject<boolean>();

  constructor() {}

  ngOnInit(): void {
    if (!this.closeModal || !this.onDeleteEmployee) {
      throw new Error('required input functions not provided');
    }

    this.modalEvent$?.subscribe((evt) => {
      if (evt.modal === DeleteEmployeeModalComponent.mode) {
        switch (evt.action) {
          case 'open':
            this.confirmCountDownToggle$.next(true);
            break;
          case 'close':
            this.confirmCountDownToggle$.next(false);
            break;
          default:
            break;
        }
      }
    });
  }

  // TODO: Add countdown confirmation for modal button
}
