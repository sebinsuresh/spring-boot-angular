import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { EmployeeSearchComponent } from './components/employee-search/employee-search.component';
import { AddEmployeeModalComponent } from './components/modals/modals-container/add-employee-modal/add-employee-modal.component';
import { DeleteEmployeeModalComponent } from './components/modals/modals-container/delete-employee-modal/delete-employee-modal.component';
import { EditEmployeeModalComponent } from './components/modals/modals-container/edit-employee-modal/edit-employee-modal.component';
import { ModalsContainerComponent } from './components/modals/modals-container/modals-container.component';
import { TimedButtonComponent } from './components/timed-button/timed-button.component';
import { EmployeeState } from './states/employee/employee.state';

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
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxsModule.forRoot([EmployeeState], { developmentMode: !environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
