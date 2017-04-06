import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConfirmService {
  open$: Subject<string>;
  observer: any;

  constructor() {
    this.open$ = new Subject<string>();
  }

  open(content?: string) {
    this.open$.next(content || '');
    return new Observable(observer => this.observer = observer);
  }

  confirm() {
    this.observer.next(true);
  }
}
