import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { TablesComponent } from './components/tables/tables.component';
import { ModalComponent } from './components/modal/modal.component';
import { UiFeaturesComponent } from './components/ui-features/ui-features.component';

export const routes: Routes = [
  {
    path: '',
    component: UiFeaturesComponent,
    children: [
      {
        path: 'modal',
        component: ModalComponent,
        data: {
          title: '弹窗'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiFeaturesRoutingModule { }
