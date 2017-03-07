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
import { InlineFormComponent } from './components/layouts/components/inline-form/inline-form.component';
import { BasicFormComponent } from './components/layouts/components/basic-form/basic-form.component';
import { FormWithoutLabelsComponent } from './components/layouts/components/form-without-labels/form-without-labels.component';
import { HorizontalFormComponent } from './components/layouts/components/horizontal-form/horizontal-form.component';
import { BlockFormComponent } from './components/layouts/components/block-form/block-form.component';

@NgModule({
  imports: [
    SharedModule,
    FormRoutingModule
  ],
  declarations: [InputsComponent, LayoutsComponent, FormComponent, StandardInputsComponent, ValidationStatesComponent, CheckboxRadioInputsComponent, InputGroupsComponent, InputSelectsComponent, InlineFormComponent, BasicFormComponent, FormWithoutLabelsComponent, HorizontalFormComponent, BlockFormComponent]
})
export class FormModule { }
