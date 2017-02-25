import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

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
  declarations: []
})
export class CoreModule { }
