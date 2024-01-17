import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EmployeeModalEventService } from 'src/app/services/employee-modal-event/employee-modal-event.service';
import { Employee } from 'src/types/employee';
import { EmployeeModalEvent, ModalTypes } from 'src/types/modalTypes';

@Component({
  selector: 'app-modals-container',
  templateUrl: './modals-container.component.html',
  styleUrls: ['./modals.css'],
})
export class ModalsContainerComponent implements OnInit {
  @ViewChild('container', { static: true }) private selfRef!: ElementRef<HTMLElement>;

  public currentEmployee: Employee | undefined;

  constructor(private modalEventHandler: EmployeeModalEventService) {}

  ngOnInit(): void {
    if (!this.selfRef || !this.selfRef.nativeElement) {
      throw new Error('modal container not found');
    }
  }

  public onOpenModal(event: EmployeeModalEvent) {
    this.currentEmployee = event.data;
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

    const modals = modalContainer.querySelectorAll(`.modals-container .modal`);
    modals.forEach((modal) => {
      if (!(modal instanceof HTMLElement)) return;
      this.hideElement(modal);

      // TODO: Better approach?
      const modalType = modal.id.replace('Employee', '');
      this.modalEventHandler.emit({ event: 'cancel', modal: modalType as ModalTypes });
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
