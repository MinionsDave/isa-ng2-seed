import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DropdownModule } from 'ng2-bootstrap';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    DropdownModule.forRoot(),
    MalihuScrollbarModule.forRoot()
  ],
  exports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    MalihuScrollbarModule,
    Ng2SmartTableModule,
    ReactiveFormsModule,
    CardComponent,
    CheckboxComponent
  ],
  declarations: [CardComponent, CheckboxComponent]
})
export class SharedModule {
}
