import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-features',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./ui-features.component.scss']
})
export class UiFeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
