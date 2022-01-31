import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { RouterModule } from '@angular/router';
import { CommonMaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddtocartComponent } from './addtocart/addtocart.component';
// import { FlexLayoutModule } from"@angular/flex-layout";

@NgModule({
  declarations: [
    AddtocartComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule,
    CommonMaterialModule
  ],
  exports: [CommonMaterialModule, RouterModule, FormsModule,HttpClientModule,CommonMaterialModule,ReactiveFormsModule],
})
export class SharedModule {}
