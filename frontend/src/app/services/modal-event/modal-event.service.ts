import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ModalEvent } from 'src/types/modalTypes';

@Injectable({
  providedIn: 'root',
})
export class ModalEventService {
  private eventHandler$;

  constructor() {
    this.eventHandler$ = new Subject<ModalEvent>();
  }

  public getObservable(): Observable<ModalEvent> {
    return this.eventHandler$.asObservable();
  }

  public emit(event: ModalEvent) {
    this.eventHandler$.next(event);
  }
}
