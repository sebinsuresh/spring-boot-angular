import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { EmployeeModalEventService } from 'src/app/services/employee-modal-event/employee-modal-event.service';
import { EmployeeModalEvent } from 'src/types/modalTypes';
import { BaseModalComponent } from './base-modal/base-modal.component';

@Component({
  selector: 'app-modals-container',
  templateUrl: './modals-container.component.html',
  styleUrls: ['./modals.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalsContainerComponent implements OnInit {
  @ViewChild('container', { static: true }) private selfRef!: ElementRef<HTMLElement>;
  @ViewChildren('modal') private components?: QueryList<BaseModalComponent>;

  constructor(private modalEventHandler: EmployeeModalEventService) {}

  ngOnInit(): void {
    if (!this.selfRef || !this.selfRef.nativeElement) {
      throw new Error('modal container not found');
    }
  }

  public onOpenModal(event: EmployeeModalEvent) {
    const modalType = event.modal;
    const modalContainer = this.selfRef.nativeElement;

    const modal = document.getElementById(`${modalType}Employee`);
    if (!modal) {
      console.error(`modal for ${modalType} not found`);
      return;
    }
    this.showElement(modalContainer);
    this.showElement(modal);

    this.modalEventHandler.emit({ event: 'open', modal: modalType });
  }

  public closeAllModals(event?: Event): void {
    const modalContainer = this.selfRef.nativeElement;

    // Only close modals when the dark background area is clicked, not when modal body/elements are clicked.
    if (event?.currentTarget === modalContainer && event?.target !== modalContainer) {
      event?.stopImmediatePropagation();
      return;
    }

    this.components?.forEach((component) => {
      this.hideElement(component.element.nativeElement);
      this.modalEventHandler.emit({ event: 'cancel', modal: component.mode });
    });

    this.hideElement(modalContainer);
  }

  private showElement(element: HTMLElement, displayType = 'block') {
    element.style.display = displayType;
  }

  private hideElement(element: HTMLElement) {
    element.style.display = 'none';
  }
}
