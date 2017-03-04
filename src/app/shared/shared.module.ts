import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DropdownModule } from 'ng2-bootstrap';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { CardComponent } from './card/card.component';

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
    CardComponent,
    Ng2SmartTableModule,
    ReactiveFormsModule
  ],
  declarations: [CardComponent]
})
export class SharedModule {
}
