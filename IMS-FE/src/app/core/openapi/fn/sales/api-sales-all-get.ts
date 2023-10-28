/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SalesDto } from '../../models/sales-dto';

export interface ApiSalesAllGet$Params {
}

export function apiSalesAllGet(http: HttpClient, rootUrl: string, params?: ApiSalesAllGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SalesDto>>> {
  const rb = new RequestBuilder(rootUrl, apiSalesAllGet.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<SalesDto>>;
    })
  );
}

apiSalesAllGet.PATH = '/api/Sales/all';
