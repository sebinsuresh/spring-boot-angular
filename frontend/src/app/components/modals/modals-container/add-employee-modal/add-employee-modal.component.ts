import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalTypes } from 'src/types/modalTypes';
import { BaseModalComponent } from '../base-modal/base-modal.component';

@Component({
  selector: 'app-add-employee-modal',
  templateUrl: './add-employee-modal.component.html',
  styleUrls: ['../modals.css'],
})
export class AddEmployeeModalComponent extends BaseModalComponent {
  override readonly mode: ModalTypes = 'add';
  override ngOnInit(): void {}
  override submit(form: NgForm) {
    super.submit(form);
    form.reset();
  }
}
