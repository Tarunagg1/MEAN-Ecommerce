import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlockRoutingModule } from './block-routing.module';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '@shared/shared.module';
import { AppComponent } from './root/app.component';


@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent
  ],
  imports: [
    CommonModule,
    BlockRoutingModule,
    SharedModule
  ],

  exports: [
    HeaderComponent,
  ]
})
export class BlockModule { }
