import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

  toggle(ev) {
    const submenu = $(ev.currentTarget).next();
    if (this.item.children) {
      submenu.slideToggle();
      this.item.expanded = !this.item.expanded;
    }
  }

}
