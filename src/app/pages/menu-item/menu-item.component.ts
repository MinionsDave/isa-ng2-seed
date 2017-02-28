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

  toggle() {
    if (this.item.children) return this.item.expanded = !this.item.expanded;
  }

}
