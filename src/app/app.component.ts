import { Component, AfterViewInit } from '@angular/core';

import { SpinnerService } from './core/services';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements AfterViewInit {

  title = 'app works!';

  constructor(private _spinner: SpinnerService) {

  }

  ngAfterViewInit() {
    this._spinner.hide();
  }
}
