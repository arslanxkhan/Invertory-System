/* tslint:disable */
/* eslint-disable */
import { ProductDto } from '../models/product-dto';
export interface PurchasesDto {
  createdDate?: string;
  deliveryDate?: string;
  id?: number;
  productId?: number;
  products?: ProductDto;
  quantity?: number;
  supplierName?: string | null;
  supplierNumber?: string | null;
  updateDate?: string | null;
}
