import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalEventService } from 'src/app/services/modal-event/modal-event.service';
import { Employee } from 'src/types/employee';
import { ModalEvent } from 'src/types/modalTypes';

@Component({
  selector: 'app-modals-container',
  templateUrl: './modals-container.component.html',
  styleUrls: ['./modals.css'],
})
export class ModalsContainerComponent implements OnInit {
  @Output() onAddEmployee = new EventEmitter<NgForm>();
  @Output() onEditEmployee = new EventEmitter<NgForm>();
  @Output() onDeleteEmployee = new EventEmitter<Employee>();
  @ViewChild('container', { static: true }) private modalsContainerRef: ElementRef<HTMLElement> | undefined;

  public currentEmployee: Employee | undefined;

  constructor(private modalEventHandler: ModalEventService) {}

  ngOnInit(): void {}

  public onOpenModal(event: ModalEvent) {
    this.currentEmployee = event.data;

    const modalContainer = this.modalsContainerRef?.nativeElement;
    if (!modalContainer) {
      console.error('modal container not found');
      return;
    }
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
    const modalContainer = this.modalsContainerRef?.nativeElement;
    if (!modalContainer) {
      console.error('modal container not found');
      return;
    }

    if (event?.currentTarget === modalContainer && event?.target !== modalContainer) {
      event?.stopImmediatePropagation();
      return;
    }

    const modals = modalContainer.querySelectorAll(`.modals-container .modal`);
    modals.forEach((modal) => {
      if (!(modal instanceof HTMLElement)) return;
      modal.style.display = 'none';
    });
    // TODO: Add attribute on modal html & read that in above loop?
    this.modalEventHandler.emit({ event: 'cancel', modal: 'add' });
    this.modalEventHandler.emit({ event: 'cancel', modal: 'delete' });
    this.modalEventHandler.emit({ event: 'cancel', modal: 'edit' });

    modalContainer.style.display = 'none';
  }
}
