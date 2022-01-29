import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsModule } from './products/products.module';
import { SharedModule } from '@shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { BlockModule } from './block/block.module';
import { AppComponent } from './block/root/app.component';
import { CoreModule } from '@core/core.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    ProductsModule,
    SharedModule,
    AuthModule,
    CoreModule,
    BlockModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
