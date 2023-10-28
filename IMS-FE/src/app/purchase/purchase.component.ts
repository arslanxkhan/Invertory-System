import { PurchaseService } from './../core/openapi/services/purchase.service';
import { Component, OnInit } from '@angular/core';
import { PurchasesDto } from '../core/openapi/models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddProductComponent } from '../shared/modal/add-product/add-product.component';
import { AddPurchaseComponent } from '../shared/modal/add-purchase/add-purchase.component';
import { AppEventsService } from '../core/appServices/app-events.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css'],
})
export class PurchaseComponent implements OnInit {
  purchases: PurchasesDto[] = [];
  constructor(
    private modalService: NgbModal,
    private appEventsService: AppEventsService,
    private purchaseService: PurchaseService
  ) {}

  ngOnInit(): void {
    this.getAll();

    this.appEventsService.getAllPurchase.subscribe((x) => {
      this.getAll();
    });
  }

  getAll() {
    this.purchaseService.apiPurchaseAllGet().subscribe((x) => {
      this.purchases = x;
    });
  }

  openDialog() {
    const modalRef = this.modalService.open(AddPurchaseComponent);
  }

  notImplement() {
    alert('Not implement yet!');
  }
}
