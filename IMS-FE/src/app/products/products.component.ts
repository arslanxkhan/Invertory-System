import { ProductDto } from 'src/app/core/openapi/models';
import { ProductService } from './../core/openapi/services/product.service';
import { Component, OnInit } from '@angular/core';
import { AddProductComponent } from '../shared/modal/add-product/add-product.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppEventsService } from '../core/appServices/app-events.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: ProductDto[] = [];

  constructor(
    private productService: ProductService,
    private modalService: NgbModal,
    private appEventService: AppEventsService
  ) {}

  ngOnInit(): void {
    this.getAll();

    this.appEventService.getAllProducts.subscribe((x) => {
      this.getAll();
    });
  }

  getAll() {
    this.productService.apiProductAllGet().subscribe((x) => {
      this.products = x;
    });
  }

  delete(productId: number | undefined) {
    if (!productId) return;
    this.productService.apiProductDeleteDelete({ Id: productId }).subscribe(
      (x) => {
        var i = this.products.findIndex((x) => x.id == productId);
        if (i >= 0) this.products.splice(i, 1);
      },
      () => {
        // handle error
      }
    );
  }

  details(item: ProductDto) {
    const modalRef = this.modalService.open(AddProductComponent);
    modalRef.componentInstance.product = Object.assign({}, item);
    modalRef.componentInstance.isDetails = true;
  }
  updateProduct(item: ProductDto) {
    const modalRef = this.modalService.open(AddProductComponent);
    modalRef.componentInstance.product = Object.assign({}, item);
    modalRef.componentInstance.isDetails = false;
  }

  openProductDialog() {
    const modalRef = this.modalService.open(AddProductComponent);
    modalRef.componentInstance.product = {};
    modalRef.componentInstance.isDetails = false;
  }
}
