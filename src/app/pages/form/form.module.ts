import { NgModule } from '@angular/core';

import { FormRoutingModule } from './form-routing.module';
import { SharedModule } from '../../shared';

import { InputsComponent } from './components/inputs/inputs.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { FormComponent } from './components/form/form.component';
import { StandardInputsComponent } from './components/inputs/components/standard-inputs/standard-inputs.component';
import { ValidationStatesComponent } from './components/inputs/components/validation-states/validation-states.component';
import { CheckboxRadioInputsComponent } from './components/inputs/components/checkbox-radio-inputs/checkbox-radio-inputs.component';
import { InputGroupsComponent } from './components/inputs/components/input-groups/input-groups.component';
import { InputSelectsComponent } from './components/inputs/components/input-selects/input-selects.component';

@NgModule({
  imports: [
    SharedModule,
    FormRoutingModule
  ],
  declarations: [InputsComponent, LayoutsComponent, FormComponent, StandardInputsComponent, ValidationStatesComponent, CheckboxRadioInputsComponent, InputGroupsComponent, InputSelectsComponent]
})
export class FormModule { }
