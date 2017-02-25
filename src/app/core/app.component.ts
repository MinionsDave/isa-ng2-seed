import { Component, AfterViewInit } from '@angular/core';

import { BaThemeSpinnerService } from '../core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  title = 'app works!';

  constructor(private _spinner: BaThemeSpinnerService) {

  }

  ngAfterViewInit() {
    this._spinner.hide();
  }
}
