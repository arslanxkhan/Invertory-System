import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';

@NgModule({
  declarations: [SalesComponent],
  imports: [SalesRoutingModule, CommonModule],
  exports: [SalesComponent],
})
export class SalesModule {}
