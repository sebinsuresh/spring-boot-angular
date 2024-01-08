import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../../types/employee';
import { EmployeeSearchService } from '../services/employee-search/employee-search.service';

@Component({
  // Mark data input as required. https://stackoverflow.com/a/50293330
  selector: 'app-employee-search[data]',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css'],
})
export class EmployeeSearchComponent {
  @Input() data: Employee[] = [];
  @Output() onSearchResult = new EventEmitter<Employee[]>();

  constructor(private searchService: EmployeeSearchService) {}

  onSearch(event: Event) {
    const key = (event.target as HTMLInputElement)?.value;
    this.onSearchResult.emit(this.searchService.findEmployees(this.data, key));
  }
}
