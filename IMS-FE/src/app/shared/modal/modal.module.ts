import { NgModule } from '@angular/core';
import { AddProductComponent } from './add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddPurchaseComponent } from './add-purchase/add-purchase.component';

@NgModule({
  declarations: [AddProductComponent, AddPurchaseComponent],
  imports: [ReactiveFormsModule, CommonModule],
  exports: [],
})
export class ModalModule {}
