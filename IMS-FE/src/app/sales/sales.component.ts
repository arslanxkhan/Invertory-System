import { Component, OnInit } from '@angular/core';
import { SalesService } from '../core/openapi/services';
import { SalesDto } from '../core/openapi/models';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
})
export class SalesComponent implements OnInit {
  constructor(private salesService: SalesService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  sales: SalesDto[] = [];

  getAll() {
    this.salesService.apiSalesAllGet().subscribe((x) => {
      this.sales = x;
    });
  }
}
