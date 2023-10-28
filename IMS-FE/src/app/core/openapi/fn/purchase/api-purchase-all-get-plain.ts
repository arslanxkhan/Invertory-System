/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PurchasesDto } from '../../models/purchases-dto';

export interface ApiPurchaseAllGet$Plain$Params {
}

export function apiPurchaseAllGet$Plain(http: HttpClient, rootUrl: string, params?: ApiPurchaseAllGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PurchasesDto>>> {
  const rb = new RequestBuilder(rootUrl, apiPurchaseAllGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<PurchasesDto>>;
    })
  );
}

apiPurchaseAllGet$Plain.PATH = '/api/Purchase/all';
