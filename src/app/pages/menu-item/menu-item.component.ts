import { Component, OnInit, Input } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';

import 'style-loader!./menu-item.component.scss';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {
  @Input() item: any;

  constructor(private _sidebarService: SidebarService) { }

  ngOnInit() {
  }

  toggle(ev) {
    const submenu = $(ev.currentTarget).next();
    if (this.item.children) {
      this.item.expanded = !this.item.expanded;
      if (this._sidebarService.getSidebarIsCollapsed()) {

        // 如果原先sidebar是收缩状态则不应有动画
        submenu.show();
        this._sidebarService.expand();
      } else {
        submenu.slideToggle();
      }
    }
  }

}
