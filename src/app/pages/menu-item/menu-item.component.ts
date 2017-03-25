import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { SidebarService } from '../sidebar/sidebar.service';

import 'style-loader!./menu-item.component.scss';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements AfterViewInit {
  @Input() item: any;
  @ViewChild('subList') subList: ElementRef;
  $subList: JQuery;

  constructor(private _sidebarService: SidebarService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute,
              private _el: ElementRef
  ) { }

  ngAfterViewInit() {
    // 有子菜单才需展开
    if (this.item.children) {
      this.$subList = $(this.subList.nativeElement);
      this._router.events
                  .filter(e => e instanceof NavigationEnd)
                  .map(() => this._activatedRoute)
                  .map(route => {
                    while (route.firstChild) route = route.firstChild;
                    return route;
                  })
                  .mergeMap(route => route.url)
                  .subscribe(urls => {
                    // 当前路由的路径
                    const currentPath = urls[0].path;
                    if (this.item.children.some(o => o.path.split('/').pop() === currentPath)) {
                      this.item.expanded = true;
                      this.$subList.show();
                    };
                  });
    }
  }

  toggle(ev) {
    if (!this.item.children) return;
    if (this._sidebarService.getSidebarIsCollapsed()) {
      // 如果原先已经是打开状态则什么都不做，只管侧边栏展开即可
      if (this.item.expanded) {
        this._sidebarService.expand();
      } else {
        this.item.expanded = true;

        // 如果原先sidebar是收缩状态则不应有动画
        this.$subList.show();
      }
    } else {
      this.item.expanded = !this.item.expanded;
      this.$subList.slideToggle();
    }
  }
}
