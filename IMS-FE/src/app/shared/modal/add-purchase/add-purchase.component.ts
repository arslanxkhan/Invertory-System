import { ProductService } from 'src/app/core/openapi/services';
import { PurchaseService } from './../../../core/openapi/services/purchase.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppEventsService } from 'src/app/core/appServices/app-events.service';
import { ProductDto, PurchasesDto } from 'src/app/core/openapi/models';

@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.css'],
})
export class AddPurchaseComponent {
  constructor(
    public activeModal: NgbActiveModal,
    private purchaseService: PurchaseService,
    private productService: ProductService,
    private appEventsService: AppEventsService
  ) {}

  purchaseForm: FormGroup = new FormGroup({});
  purchase: PurchasesDto = {};
  products: ProductDto[] = [];

  ngOnInit() {
    this.productService.apiProductAllGet().subscribe((x) => {
      this.products = x;
    });

    this.purchaseForm = new FormGroup({
      supplierName: new FormControl(this.purchase?.supplierName, [
        Validators.required,
      ]),
      supplierNumber: new FormControl(this.purchase?.supplierNumber, [
        Validators.required,
      ]),
      deliveryDate: new FormControl(this.purchase?.deliveryDate, [
        Validators.required,
      ]),
      quantity: new FormControl(this.purchase?.quantity, [Validators.required]),
      productId: new FormControl(this.purchase?.productId, [
        Validators.required,
      ]),
    });
  }

  submit() {
    if (!this.purchaseForm.valid) return;

    this.purchaseService.apiPurchaseNewPost({ body: this.purchase }).subscribe(
      (x) => {
        this.appEventsService.getAllPurchase.emit();
        this.activeModal.dismiss();
      },
      () => {
        // handle error
      }
    );
  }
}
