import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  BaThemeSpinnerService
} from './services';

const NGA_SERVICES = [
  BaThemeSpinnerService
];

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    // ...NGA_SERVICES
  ],
  exports: [
    // ...NGA_SERVICES
  ],
})
export class NgaModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: NgaModule,
      providers: [
        ...NGA_SERVICES
      ],
    };
  }
}
