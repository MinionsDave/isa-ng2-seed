import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  sidebarCollapsed: boolean;
  constructor(private _sidebarService: SidebarService) {
    this._sidebarService.collapsed.subscribe(sidebarCollapsed => this.sidebarCollapsed = sidebarCollapsed);
  }

  ngOnInit() {
  }

}
