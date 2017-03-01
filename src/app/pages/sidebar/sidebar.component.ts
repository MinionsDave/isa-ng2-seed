import { Component, AfterViewInit } from '@angular/core';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

import { PAGES_MENU } from './sidebar.constant';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements AfterViewInit {
  menus = PAGES_MENU;

  constructor(private malihuScrollbarService: MalihuScrollbarService) { }

  ngAfterViewInit() {
    this.malihuScrollbarService.initScrollbar('#sidebar', {axis: 'y', theme: 'minimal'});
    $('#sidebar .mCSB_dragger_bar').css('margin-right', 0);
  }
}
