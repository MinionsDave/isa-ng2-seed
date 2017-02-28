import { Component, OnInit } from '@angular/core';

import { PAGES_MENU } from './sidebar.constant';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menus = PAGES_MENU;

  constructor() { }

  ngOnInit() {
  }

}
