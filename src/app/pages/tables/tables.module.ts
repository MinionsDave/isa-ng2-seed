import { NgModule } from '@angular/core';

import { TablesRoutingModule } from './tables-routing.module';
import { SharedModule } from '../../shared';

import { TablesComponent } from './components/tables/tables.component';
import { PureCssTableComponent } from './components/pure-css-table/pure-css-table.component';

@NgModule({
  imports: [
    SharedModule,
    TablesRoutingModule
  ],
  declarations: [TablesComponent, PureCssTableComponent]
})
export class TablesModule { }
