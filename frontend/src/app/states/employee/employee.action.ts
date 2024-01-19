import { Employee } from 'src/types/employee';

export class GetAllEmployeesFromAPI {
  static readonly type = '[EmployeeManager] GetAllEmployeesFromAPI';
  constructor() {}
}

export class SetCurrentEmployee {
  static readonly type = '[EmployeeManager] SetCurrentEmployee';
  constructor(public employee: Employee) {}
}

export class AddEmployee {
  static readonly type = '[EmployeeManager] AddEmployee';
  constructor(public employee: Employee) {}
}

export class EditEmployee {
  static readonly type = '[EmployeeManager] EditEmployee';
  constructor(public employee: Employee) {}
}

export class DeleteEmployee {
  static readonly type = '[EmployeeManager] DeleteEmployee';
  constructor(public employee: Employee) {}
}
