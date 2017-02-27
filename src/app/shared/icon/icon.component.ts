import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-icon',
  template: `
    <i
    class="iconfont"
    [ngClass]="name"
    [ngStyle]="{'font-size.px': size}"></i>
  `,
  styleUrls: ['./icon.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IconComponent implements OnInit {
  @Input() name: string;
  @Input() size: string;

  constructor() {
  }

  ngOnInit() {
    this.name = 'icon-' + this.name;
  }

}
