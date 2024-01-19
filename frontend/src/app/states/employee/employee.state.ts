import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { Employee } from 'src/types/employee';
import { EmployeeCrudService } from '../../services/employee-crud/employee-crud.service';
import {
  AddEmployee,
  DeleteEmployee,
  EditEmployee,
  GetAllEmployeesFromAPI,
  SetCurrentEmployee,
} from './employee.action';

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
  static allEmployees(state: EmployeeStateModel): Employee[] {
    return state.allEmployees;
  }

  @Selector()
  static currentEmployee(state: EmployeeStateModel): Employee | undefined {
    return state.currentEmployee;
  }

  //#endregion

  //#region Actions

  @Action(GetAllEmployeesFromAPI)
  getEmployeesApi(ctx: StateContext<EmployeeStateModel>) {
    return this.crudService.getEmployees().pipe(
      tap((result) => {
        ctx.patchState({ allEmployees: result });
      }),
    );
  }

  @Action(SetCurrentEmployee)
  setCurrentEmployee(ctx: StateContext<EmployeeStateModel>, action: SetCurrentEmployee) {
    ctx.patchState({ currentEmployee: action.employee });
  }

  @Action(AddEmployee)
  addEmployee(ctx: StateContext<EmployeeStateModel>, action: AddEmployee) {
    // TODO: Use ctx.currentEmployee instead?
    this.crudService.addEmployee(action.employee).pipe(
      tap((employee) => {
        ctx.patchState({ allEmployees: [...ctx.getState().allEmployees, employee] });
      }),
    );
  }

  @Action(EditEmployee)
  editEmployee(ctx: StateContext<EmployeeStateModel>, action: AddEmployee) {
    // TODO: Use ctx.currentEmployee instead?
    this.crudService.updateEmployee(action.employee).pipe(
      tap((employee) => {
        ctx.patchState({
          allEmployees: ctx
            .getState()
            .allEmployees.map((existing) => (existing.id === employee.id ? employee : existing)),
        });
      }),
    );
  }

  @Action(DeleteEmployee)
  deleteEmployee(ctx: StateContext<EmployeeStateModel>, action: AddEmployee) {
    // TODO: Use ctx.currentEmployee instead?
    this.crudService.deleteEmployee(action.employee.id).pipe(
      tap(() => {
        ctx.patchState({
          allEmployees: ctx.getState().allEmployees.filter((existing) => existing.id !== action.employee.id),
        });
      }),
    );
  }

  //#endregion
}
