/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PurchasesDto } from '../../models/purchases-dto';

export interface ApiPurchaseAllGet$Params {
}

export function apiPurchaseAllGet(http: HttpClient, rootUrl: string, params?: ApiPurchaseAllGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PurchasesDto>>> {
  const rb = new RequestBuilder(rootUrl, apiPurchaseAllGet.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<PurchasesDto>>;
    })
  );
}

apiPurchaseAllGet.PATH = '/api/Purchase/all';
