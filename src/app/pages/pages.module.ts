import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    SharedModule,
    PagesRoutingModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
