import { Component, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { ModalTypes } from 'src/types/modalTypes';
import { BaseModalComponent } from '../base-modal/base-modal.component';

@Component({
  selector: 'app-delete-employee-modal',
  templateUrl: './delete-employee-modal.component.html',
  styleUrls: ['../modals.css'],
})
export class DeleteEmployeeModalComponent extends BaseModalComponent implements OnDestroy {
  public confirmCountDownToggle$ = new Subject<boolean>();
  public override mode: ModalTypes = 'delete';
  public modalEvt$!: Subscription;

  override ngOnInit(): void {
    this.modalEvt$ = this.modalEventService.getObservable().subscribe((evt) => {
      if (evt.modal === this.mode) {
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

  ngOnDestroy(): void {
    this.modalEvt$.unsubscribe();
  }
}
