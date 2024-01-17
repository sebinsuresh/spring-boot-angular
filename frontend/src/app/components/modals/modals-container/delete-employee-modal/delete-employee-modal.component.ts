import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalEventService } from 'src/app/services/modal-event/modal-event.service';
import { Employee } from 'src/types/employee';
import { ModalTypes } from 'src/types/modalTypes';

@Component({
  selector: 'app-delete-employee-modal',
  templateUrl: './delete-employee-modal.component.html',
  styleUrls: ['../modals.css'],
})
export class DeleteEmployeeModalComponent implements OnInit {
  // TODO: Refactor these using Directive? https://stackoverflow.com/a/70099300
  @Input() employee: Employee | undefined;
  @Output() closeModal = new EventEmitter();
  @Output() onDeleteEmployee = new EventEmitter<Employee>();

  public static readonly mode: ModalTypes = 'delete';
  public confirmCountDownToggle$ = new Subject<boolean>();

  constructor(private modalEventService: ModalEventService) {}

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
}
