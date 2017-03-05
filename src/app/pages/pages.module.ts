import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';

import { SidebarService } from './sidebar/sidebar.service';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages/pages.component';
import { HeadbarComponent } from './headbar/headbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { PageTopComponent } from './page-top/page-top.component';

@NgModule({
  declarations: [
    PagesComponent,
    HeadbarComponent,
    SidebarComponent,
    MenuItemComponent,
    PageTopComponent
  ],
  imports: [
    SharedModule,
    PagesRoutingModule,
    PagesRoutingModule
  ],
  providers: [
    SidebarService
  ]
})
export class PagesModule { }
