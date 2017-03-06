import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputsComponent } from './components/inputs/inputs.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { FormComponent } from './components/form/form.component';

export const routes: Routes = [
  {
    path: '',
    component: FormComponent,
    children: [
      {
        path: 'inputs',
        component: InputsComponent,
        data: {
          title: '表单控件'
        }
      },
      {
        path: 'layouts',
        component: LayoutsComponent,
        data: {
          title: '表单布局'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule {}
