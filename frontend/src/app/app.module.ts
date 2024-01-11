import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { EmployeeSearchComponent } from './components/employee-search/employee-search.component';
import { AddEmployeeModalComponent } from './components/modals/modals-container/add-employee-modal/add-employee-modal.component';
import { DeleteEmployeeModalComponent } from './components/modals/modals-container/delete-employee-modal/delete-employee-modal.component';
import { EditEmployeeModalComponent } from './components/modals/modals-container/edit-employee-modal/edit-employee-modal.component';
import { ModalsContainerComponent } from './components/modals/modals-container/modals-container.component';
import { TimedButtonComponent } from './components/timed-button/timed-button.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCardComponent,
    EmployeeSearchComponent,
    ModalsContainerComponent,
    AddEmployeeModalComponent,
    EditEmployeeModalComponent,
    DeleteEmployeeModalComponent,
    TimedButtonComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
