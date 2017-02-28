import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages/pages.component';
import { HeadbarComponent } from './headbar/headbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuItemComponent } from './menu-item/menu-item.component';

@NgModule({
  declarations: [
    PagesComponent,
    HeadbarComponent,
    SidebarComponent,
    MenuItemComponent
  ],
  imports: [
    SharedModule,
    PagesRoutingModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
