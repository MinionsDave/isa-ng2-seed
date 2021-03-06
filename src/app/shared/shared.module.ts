import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DropdownModule, PaginationModule } from 'ng2-bootstrap';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TooltipModule } from 'ngx-tooltip';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';

import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    DropdownModule.forRoot(),
    MalihuScrollbarModule.forRoot(),
    PaginationModule.forRoot()
  ],
  exports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    MalihuScrollbarModule,
    Ng2SmartTableModule,
    ReactiveFormsModule,
    TooltipModule,
    NgxMyDatePickerModule,
    CardComponent,
    CheckboxComponent,
    PaginationModule
  ],
  declarations: [CardComponent, CheckboxComponent]
})
export class SharedModule {
}
