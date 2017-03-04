import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DropdownModule } from 'ng2-bootstrap';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';

import { IconComponent } from './icon/icon.component';
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
    IconComponent,
    MalihuScrollbarModule,
    CardComponent
  ],
  declarations: [IconComponent, CardComponent]
})
export class SharedModule {
}
