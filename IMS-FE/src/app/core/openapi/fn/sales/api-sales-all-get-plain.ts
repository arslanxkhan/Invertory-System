/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SalesDto } from '../../models/sales-dto';

export interface ApiSalesAllGet$Plain$Params {
}

export function apiSalesAllGet$Plain(http: HttpClient, rootUrl: string, params?: ApiSalesAllGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SalesDto>>> {
  const rb = new RequestBuilder(rootUrl, apiSalesAllGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<SalesDto>>;
    })
  );
}

apiSalesAllGet$Plain.PATH = '/api/Sales/all';
