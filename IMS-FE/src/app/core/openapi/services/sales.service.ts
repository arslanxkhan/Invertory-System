/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiSalesAllGet } from '../fn/sales/api-sales-all-get';
import { ApiSalesAllGet$Params } from '../fn/sales/api-sales-all-get';
import { apiSalesAllGet$Plain } from '../fn/sales/api-sales-all-get-plain';
import { ApiSalesAllGet$Plain$Params } from '../fn/sales/api-sales-all-get-plain';
import { apiSalesProductIdPost } from '../fn/sales/api-sales-product-id-post';
import { ApiSalesProductIdPost$Params } from '../fn/sales/api-sales-product-id-post';
import { SalesDto } from '../models/sales-dto';

@Injectable({ providedIn: 'root' })
export class SalesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiSalesAllGet()` */
  static readonly ApiSalesAllGetPath = '/api/Sales/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSalesAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSalesAllGet$Plain$Response(params?: ApiSalesAllGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SalesDto>>> {
    return apiSalesAllGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSalesAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSalesAllGet$Plain(params?: ApiSalesAllGet$Plain$Params, context?: HttpContext): Observable<Array<SalesDto>> {
    return this.apiSalesAllGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SalesDto>>): Array<SalesDto> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSalesAllGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSalesAllGet$Response(params?: ApiSalesAllGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SalesDto>>> {
    return apiSalesAllGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSalesAllGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSalesAllGet(params?: ApiSalesAllGet$Params, context?: HttpContext): Observable<Array<SalesDto>> {
    return this.apiSalesAllGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SalesDto>>): Array<SalesDto> => r.body)
    );
  }

  /** Path part for operation `apiSalesProductIdPost()` */
  static readonly ApiSalesProductIdPostPath = '/api/Sales/{productId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSalesProductIdPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSalesProductIdPost$Response(params: ApiSalesProductIdPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiSalesProductIdPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSalesProductIdPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSalesProductIdPost(params: ApiSalesProductIdPost$Params, context?: HttpContext): Observable<void> {
    return this.apiSalesProductIdPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
