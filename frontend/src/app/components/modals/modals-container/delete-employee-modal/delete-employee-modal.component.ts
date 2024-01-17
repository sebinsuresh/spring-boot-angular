import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { EmployeeModalEventService } from 'src/app/services/employee-modal-event/employee-modal-event.service';
import { Employee } from 'src/types/employee';
import { ModalTypes } from 'src/types/modalTypes';

@Component({
  selector: 'app-delete-employee-modal',
  templateUrl: './delete-employee-modal.component.html',
  styleUrls: ['../modals.css'],
})
export class DeleteEmployeeModalComponent implements OnInit {
  @Input() employee: Employee | undefined;
  @Output() closeModal = new EventEmitter();

  public static readonly mode: ModalTypes = 'delete';
  public confirmCountDownToggle$ = new Subject<boolean>();

  constructor(private modalEventService: EmployeeModalEventService) {}

  ngOnInit(): void {
    this.modalEventService.getObservable().subscribe((evt) => {
      if (evt.modal === DeleteEmployeeModalComponent.mode) {
        switch (evt.event) {
          case 'open':
            this.confirmCountDownToggle$.next(true);
            break;
          case 'cancel':
          case 'confirm':
            this.confirmCountDownToggle$.next(false);
            break;
          default:
            break;
        }
      }
    });
  }

  submit() {
    this.modalEventService.emit({
      data: this.employee,
      event: 'confirm',
      modal: DeleteEmployeeModalComponent.mode,
    });
  }
}
