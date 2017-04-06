import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule',
        data: {
          title: '仪表盘'
        }
      },
      {
        path: 'tables',
        loadChildren: 'app/pages/tables/tables.module#TablesModule',
        data: {
          title: '表格'
        }
      },
      {
        path: 'form',
        loadChildren: 'app/pages/form/form.module#FormModule',
        data: {
          title: '表单'
        }
      },
      {
        path: 'uiFeatures',
        loadChildren: 'app/pages/ui-features/ui-features.module#UiFeaturesModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
