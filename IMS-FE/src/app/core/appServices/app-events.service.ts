import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppEventsService {
  constructor() {}

  getAllProducts: EventEmitter<any> = new EventEmitter<any>();
  getAllPurchase: EventEmitter<any> = new EventEmitter<any>();
}
