import { NgModule } from '@angular/core';

import { FormRoutingModule } from './form-routing.module';
import { SharedModule } from '../../shared';

import { InputsComponent } from './components/inputs/inputs.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  imports: [
    SharedModule,
    FormRoutingModule
  ],
  declarations: [InputsComponent, LayoutsComponent, FormComponent]
})
export class FormModule { }