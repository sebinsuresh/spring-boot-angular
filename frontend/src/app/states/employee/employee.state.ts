import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { Employee } from 'src/types/employee';
import { EmployeeCrudService } from '../../services/employee-crud/employee-crud.service';
import { AddEmployee, DeleteEmployee, EditEmployee, GetAllEmployeesFromAPI } from './employee.action';

export interface EmployeeStateModel {
  allEmployees: Employee[];
  currentEmployee?: Employee;
}

@State<EmployeeStateModel>({
  name: 'employee',
  defaults: {
    allEmployees: [],
    currentEmployee: undefined,
  },
})
@Injectable()
export class EmployeeState {
  constructor(private crudService: EmployeeCrudService) {}

  //#region selectors

  @Selector()
  static getAllEmployees(state: EmployeeStateModel): Employee[] {
    return state.allEmployees;
  }

  @Selector()
  static getCurrentEmployee(state: EmployeeStateModel): Employee | undefined {
    return state.currentEmployee;
  }

  //#endregion

  //#region Actions

  @Action(GetAllEmployeesFromAPI)
  getEmployeesApi(ctx: StateContext<EmployeeStateModel>, action: GetAllEmployeesFromAPI) {
    return this.crudService.getEmployees().pipe(
      tap((result) => {
        ctx.patchState({ allEmployees: result });
      }),
    );
  }

  @Action(AddEmployee)
  addEmployee(ctx: StateContext<EmployeeStateModel>, action: AddEmployee) {
    ctx.patchState({ currentEmployee: action.employee });
  }

  @Action(EditEmployee)
  EditEmployee(ctx: StateContext<EmployeeStateModel>, action: AddEmployee) {
    ctx.patchState({ currentEmployee: action.employee });
  }

  @Action(DeleteEmployee)
  DeleteEmployee(ctx: StateContext<EmployeeStateModel>, action: AddEmployee) {
    ctx.patchState({ currentEmployee: action.employee });
  }

  //#endregion
}
