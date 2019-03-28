import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdhomeComponent } from './adhome/adhome.component';
//LayoutComponent 不在app.module.ts注入 而是在这里注入；否则会报错
import {LayoutComponent} from "../layout/layout.component";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdhomeComponent,LayoutComponent]
})
export class AdminModule { }
