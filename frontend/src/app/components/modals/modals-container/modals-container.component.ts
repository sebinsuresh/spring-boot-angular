import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalEventService } from 'src/app/services/modal-event/modal-event.service';
import { Employee } from 'src/types/employee';
import { ModalEvent, ModalTypes } from 'src/types/modalTypes';

@Component({
  selector: 'app-modals-container',
  templateUrl: './modals-container.component.html',
  styleUrls: ['./modals.css'],
})
export class ModalsContainerComponent implements OnInit {
  @Output() onAddEmployee = new EventEmitter<NgForm>();
  @Output() onEditEmployee = new EventEmitter<NgForm>();
  @Output() onDeleteEmployee = new EventEmitter<Employee>();

  public currentEmployee: Employee | undefined;

  constructor(private selfRef: ElementRef<HTMLElement>, private modalEventHandler: ModalEventService) {}

  ngOnInit(): void {
    if (!this.selfRef || !this.selfRef.nativeElement) {
      throw new Error('modal container not found');
    }
  }

  public onOpenModal(event: ModalEvent) {
    this.currentEmployee = event.data;

    const modalContainer = this.selfRef.nativeElement;
    modalContainer.style.display = 'block';

    const modal = document.getElementById(`${event.modal}Employee`);
    if (!modal) {
      console.error(`modal for ${event.modal} not found`);
      return;
    }
    modal.style.display = 'block';

    this.modalEventHandler.emit({ event: 'open', modal: event.modal });
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
      modal.style.display = 'none';

      // TODO: Better approach?
      const modalType = modal.id.replace('Employee', '');
      this.modalEventHandler.emit({ event: 'cancel', modal: modalType as ModalTypes });
    });

    modalContainer.style.display = 'none';
  }
}
