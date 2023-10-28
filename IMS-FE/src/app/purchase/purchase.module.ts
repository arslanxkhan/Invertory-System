import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { PurchaseComponent } from './purchase.component';
import { PurchaseRoutingModule } from './purchase.routing.module';

@NgModule({
  declarations: [PurchaseComponent],
  imports: [ PurchaseRoutingModule,CommonModule],
  exports: [PurchaseComponent],
})
export class PurchaseModule {}
