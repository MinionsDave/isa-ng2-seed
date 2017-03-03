import { NgModule } from '@angular/core';

import { TablesRoutingModule } from './tables-routeing.module';
import { SharedModule } from '../../shared';

import { TablesComponent } from './tables/tables.component';

@NgModule({
  imports: [
    SharedModule,
    TablesRoutingModule
  ],
  declarations: [TablesComponent]
})
export class TablesModule { }
