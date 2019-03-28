import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from "../layout/layout.component";
import {AdhomeComponent} from "./adhome/adhome.component";

const routes: Routes = [
  {
    path: "",
    component:LayoutComponent,
    children: [
      {path: "aa", component: AdhomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
