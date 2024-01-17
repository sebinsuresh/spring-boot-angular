import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EmployeeModalEvent } from 'src/types/modalTypes';

@Injectable({
  providedIn: 'root',
})
export class EmployeeModalEventService {
  private eventHandler$;

  constructor() {
    this.eventHandler$ = new Subject<EmployeeModalEvent>();
  }

  public getObservable(): Observable<EmployeeModalEvent> {
    return this.eventHandler$.asObservable();
  }

  public emit(event: EmployeeModalEvent) {
    this.eventHandler$.next(event);
  }
}
