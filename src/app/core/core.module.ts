import {
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';

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
  ]
})

// 防止其他模块注入本模块
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the App Module only');
    }
  }
}
