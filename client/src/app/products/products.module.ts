import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonMaterialModule } from '@shared/material-module';
import { ProductsService } from '@core/products/products.service';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
CommonMaterialModule  ],
  providers: [
    ProductsService
  ]
})
export class ProductsModule { }
