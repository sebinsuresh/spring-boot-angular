import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { Employee } from 'src/types/employee';
import { EmployeeModalEvent, ModalEvent } from 'src/types/modalTypes';

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
  // TODO: Refactor using an injectable service
  public modalEvent$ = new Subject<ModalEvent>();

  constructor() {}

  ngOnInit(): void {
    if (!this.onAddEmployee || !this.onEditEmployee || !this.onDeleteEmployee) {
      throw new Error('required input functions not provided');
    }
  }

  public onOpenModal(event: EmployeeModalEvent) {
    this.currentEmployee = event.data;

    const modalContainer = this.modalsContainerRef?.nativeElement;
    if (!modalContainer) {
      console.error('modal container not found');
      return;
    }
    modalContainer.style.display = 'block';

    const modal = document.getElementById(`${event.mode}Employee`);
    if (!modal) {
      console.error(`modal for ${event.mode} not found`);
      return;
    }
    modal.style.display = 'block';

    this.modalEvent$.next({ action: 'open', modal: event.mode });
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
    this.modalEvent$.next({ action: 'close', modal: 'add' });
    this.modalEvent$.next({ action: 'close', modal: 'delete' });
    this.modalEvent$.next({ action: 'close', modal: 'edit' });

    modalContainer.style.display = 'none';
  }
}
