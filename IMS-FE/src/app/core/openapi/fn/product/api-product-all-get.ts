/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductDto } from '../../models/product-dto';

export interface ApiProductAllGet$Params {
}

export function apiProductAllGet(http: HttpClient, rootUrl: string, params?: ApiProductAllGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ProductDto>>> {
  const rb = new RequestBuilder(rootUrl, apiProductAllGet.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ProductDto>>;
    })
  );
}

apiProductAllGet.PATH = '/api/Product/all';
