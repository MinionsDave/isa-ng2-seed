import { NgModule } from '@angular/core';

import { UiFeaturesRoutingModule } from './ui-features-routing.module';
import { SharedModule } from '../../shared';

import { ModalComponent } from './components/modal/modal.component';
import { UiFeaturesComponent } from './components/ui-features/ui-features.component';

@NgModule({
  imports: [
    SharedModule,
    UiFeaturesRoutingModule
  ],
  declarations: [
    ModalComponent,
    UiFeaturesComponent
  ]
})
export class UiFeaturesModule { }
