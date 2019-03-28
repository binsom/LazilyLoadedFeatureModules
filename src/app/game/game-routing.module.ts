import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KimiComponent} from "./kimi/kimi.component";

const routes: Routes = [
  {
    path: '',
    component: KimiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
