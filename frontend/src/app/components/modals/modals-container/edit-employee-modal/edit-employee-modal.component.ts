import { Component } from '@angular/core';
import { ModalTypes } from 'src/types/modalTypes';
import { BaseModalComponent } from '../base-modal/base-modal.component';

@Component({
  selector: 'app-edit-employee-modal',
  templateUrl: './edit-employee-modal.component.html',
  styleUrls: ['../modals.css'],
})
export class EditEmployeeModalComponent extends BaseModalComponent {
  override readonly mode: ModalTypes = 'edit';
  override ngOnInit(): void {}
}
