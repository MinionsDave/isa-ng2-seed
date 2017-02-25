import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { AppComponent } from './app.component';

import {
  BaThemeSpinnerService
} from './services';

@NgModule({
  imports: [
    SharedModule
  ],
  providers: [
    BaThemeSpinnerService
  ],
  declarations: [
    AppComponent
  ]
})
export class CoreModule { }
