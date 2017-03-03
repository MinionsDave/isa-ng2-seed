import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild
} from '@angular/core';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

import { PAGES_MENU } from './sidebar.constant';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements AfterViewInit {
  @ViewChild('sidebar') sidebarEl: ElementRef;
  menus = PAGES_MENU;

  constructor(
    private malihuScrollbarService: MalihuScrollbarService) {
  }

  ngAfterViewInit() {
    const $sidebar = $(this.sidebarEl.nativeElement);
    this.malihuScrollbarService.initScrollbar($sidebar, {axis: 'y', theme: 'minimal'});
    $sidebar.find('.mCSB_dragger_bar').css('margin-right', 0);
  }
}
