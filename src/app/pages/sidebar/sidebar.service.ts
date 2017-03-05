import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SidebarService {
  collapsed: Subject<boolean>;
  isCollapsed: boolean;

  constructor() {
    this.collapsed = new Subject<boolean>();
    this.collapsed.subscribe(collapsed => this.isCollapsed = collapsed);
  }

  collapse () {
    this.collapsed.next(true);
  }

  expand() {
    this.collapsed.next(false);
  }

  reverse() {
    this.collapsed.next(!this.isCollapsed);
  }

  getSidebarIsCollapsed() {
    return this.isCollapsed;
  }

}
