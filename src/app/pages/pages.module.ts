import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages/pages.component';
import { HeadbarComponent } from './headbar/headbar.component';

@NgModule({
  declarations: [
    PagesComponent,
    HeadbarComponent
  ],
  imports: [
    SharedModule,
    PagesRoutingModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
