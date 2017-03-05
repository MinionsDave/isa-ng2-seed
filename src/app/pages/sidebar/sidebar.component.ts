import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  HostListener
} from '@angular/core';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

import { PAGES_MENU } from './sidebar.constant';
import { SidebarService } from '../sidebar/sidebar.service';

import 'style-loader!./sidebar.component.scss';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements AfterViewInit {
  menus = PAGES_MENU;
  @ViewChild('sidebar') sidebarEl: ElementRef;

  @HostListener('window:resize')
  private onWindowResize() {
    if (this._shouldMenuCollapse()) return this._sidebarService.collapse();
    this._sidebarService.expand();
  }

  constructor(private malihuScrollbarService: MalihuScrollbarService,
              private _sidebarService: SidebarService) {
  }

  ngAfterViewInit() {
    const $sidebar = $(this.sidebarEl.nativeElement);
    this.malihuScrollbarService.initScrollbar($sidebar, {axis: 'y', theme: 'minimal'});
    $sidebar.find('.mCSB_dragger_bar').css('margin-right', 0);
    if (this._shouldMenuCollapse()) this._sidebarService.collapse();
  }

  private _shouldMenuCollapse(): boolean {
    return window.innerWidth <= 1280;
  }
}
