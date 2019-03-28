import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
const routes: Routes = [
  {
    path: '',
    component: CustomerListComponent,
    children: [
      {path: "cms",loadChildren:'./cms/cms.module#CmsModule'},//内容管理模块
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
