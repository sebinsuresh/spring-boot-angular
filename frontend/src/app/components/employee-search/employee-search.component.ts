import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Employee } from '../../../types/employee';
import { EmployeeSearchService } from '../../services/employee-search/employee-search.service';

@Component({
  // Mark data input as required. https://stackoverflow.com/a/50293330
  selector: 'app-employee-search[data]',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css'],
})
export class EmployeeSearchComponent implements OnChanges {
  @Input() data: Employee[] = [];
  @Output() onSearchResult = new EventEmitter<Employee[]>();
  private lastQuery: string = '';

  constructor(private searchService: EmployeeSearchService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.onSearch(this.lastQuery);
    }
  }

  onSearch(query: string) {
    this.lastQuery = query;
    this.onSearchResult.emit(this.searchService.findEmployees(this.data, query));
  }
}
