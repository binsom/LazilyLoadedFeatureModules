import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { KimiComponent } from './kimi/kimi.component';

@NgModule({
  imports: [
    CommonModule,
    GameRoutingModule
  ],
  declarations: [KimiComponent]
})
export class GameModule { }
