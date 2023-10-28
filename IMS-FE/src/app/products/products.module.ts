import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsComponent } from './products.component';
import { ProductRoutingModule } from './products-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ProductsComponent],
  imports: [ ProductRoutingModule,CommonModule],
  exports: [ProductsComponent],
})
export class ProductModule {}
