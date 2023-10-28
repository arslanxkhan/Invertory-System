/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SalesDto } from '../../models/sales-dto';

export interface ApiSalesProductIdPost$Params {
  productId: string;
      body?: SalesDto
}

export function apiSalesProductIdPost(http: HttpClient, rootUrl: string, params: ApiSalesProductIdPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiSalesProductIdPost.PATH, 'post');
  if (params) {
    rb.path('productId', params.productId, {"style":"simple"});
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

apiSalesProductIdPost.PATH = '/api/Sales/{productId}';
