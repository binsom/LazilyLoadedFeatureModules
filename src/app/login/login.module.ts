import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LogComponent } from './log/log.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [LogComponent]
})
export class LoginModule { }
