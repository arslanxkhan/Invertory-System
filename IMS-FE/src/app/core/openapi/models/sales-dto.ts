/* tslint:disable */
/* eslint-disable */
import { ProductDto } from '../models/product-dto';
export interface SalesDto {
  createdDate?: string;
  customerEmail?: string | null;
  customerName?: string | null;
  id?: number;
  productId?: number;
  products?: ProductDto;
  quantity?: number;
  totalPrice?: number;
  updateDate?: string | null;
}
