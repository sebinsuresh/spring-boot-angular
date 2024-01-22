import { Component, OnInit, ViewChild } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { BehaviorSubject, Observable, catchError, combineLatest, map, of } from 'rxjs';
import { EmployeeModalEvent } from 'src/types/modalTypes';
import { Employee } from '../types/employee';
import { ModalsContainerComponent } from './components/modals/modals-container/modals-container.component';
import { EmployeeModalEventService } from './services/employee-modal-event/employee-modal-event.service';
import {
  AddEmployee,
  DeleteEmployee,
  EditEmployee,
  GetAllEmployeesFromAPI,
} from './states/employee/employee.action';
import { EmployeeState } from './states/employee/employee.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild(ModalsContainerComponent) private modalsContainerRef!: ModalsContainerComponent;

  @Select(EmployeeState.currentEmployee) public currentEmployee$!: Observable<Employee>;
  @Select(EmployeeState.allEmployees) public allEmployees$!: Observable<Employee[]>;
  private searchResults = new BehaviorSubject<Employee[] | undefined>(undefined);

  public displayedEmployees$ = combineLatest([this.allEmployees$, this.searchResults]).pipe(
    // TODO: Inefficient?
    map(([all, search]) => [...(search ?? all)].sort((emp1, emp2) => emp1.id - emp2.id)),
    catchError((error) => {
      console.error(error.message);
      return of([]);
    }),
  );

  public displayedEmployees: Employee[] = [];
  public allEmployees: Employee[] = [];

  constructor(private modalEventService: EmployeeModalEventService, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new GetAllEmployeesFromAPI());

    this.modalEventService.getObservable().subscribe((event) => {
      if (!event.data || event.event !== 'confirm') {
        return;
      }

      switch (event.modal) {
        case 'add':
          this.onAddEmployee(event.data);
          break;
        case 'edit':
          this.onEditEmployee(event.data);
          break;
        case 'delete':
          this.onDeleteEmployee(event.data);
          break;
        default:
          break;
      }
    });
  }

  public onAddEmployee(employee: Employee) {
    this.closeModals();
    this.store.dispatch(new AddEmployee(employee));
  }

  public onEditEmployee(employee: Employee) {
    this.closeModals();
    this.store.dispatch(new EditEmployee(employee));
  }

  public onDeleteEmployee(employee: Employee | undefined) {
    if (!employee) {
      console.error('No employee selected for delete');
      return;
    }

    this.closeModals();
    this.store.dispatch(new DeleteEmployee(employee));
  }

  public onOpenModal(event: EmployeeModalEvent) {
    this.modalsContainerRef.onOpenModal(event);
  }

  onSearchResult(event: Employee[]) {
    this.searchResults.next(event);
  }

  private closeModals() {
    this.modalsContainerRef.closeAllModals();
  }
}
