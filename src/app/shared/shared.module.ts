import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DropdownModule } from 'ng2-bootstrap';

import { IconComponent } from './icon/icon.component';

@NgModule({
  imports: [
    CommonModule,
    DropdownModule.forRoot()
  ],
  exports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    IconComponent
  ],
  declarations: [IconComponent]
})
export class SharedModule {
}
