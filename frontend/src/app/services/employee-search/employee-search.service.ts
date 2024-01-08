import { Injectable } from '@angular/core';
import { Employee } from 'src/types/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeSearchService {
  constructor() {}

  public findEmployees(allEmployees: Employee[], searchKey?: string): Employee[] {
    const key = searchKey?.trim().toLowerCase();
    if (!key) return allEmployees;

    return allEmployees.filter(
      (emp) =>
        emp.email.toLowerCase().indexOf(key) !== -1 ||
        emp.name.toLowerCase().indexOf(key) !== -1 ||
        emp.jobTitle.toLowerCase().indexOf(key) !== -1,
    );
  }
}
