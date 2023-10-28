/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiPurchaseAllGet } from '../fn/purchase/api-purchase-all-get';
import { ApiPurchaseAllGet$Params } from '../fn/purchase/api-purchase-all-get';
import { apiPurchaseAllGet$Plain } from '../fn/purchase/api-purchase-all-get-plain';
import { ApiPurchaseAllGet$Plain$Params } from '../fn/purchase/api-purchase-all-get-plain';
import { apiPurchaseNewPost } from '../fn/purchase/api-purchase-new-post';
import { ApiPurchaseNewPost$Params } from '../fn/purchase/api-purchase-new-post';
import { PurchasesDto } from '../models/purchases-dto';

@Injectable({ providedIn: 'root' })
export class PurchaseService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiPurchaseAllGet()` */
  static readonly ApiPurchaseAllGetPath = '/api/Purchase/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPurchaseAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPurchaseAllGet$Plain$Response(params?: ApiPurchaseAllGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PurchasesDto>>> {
    return apiPurchaseAllGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPurchaseAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPurchaseAllGet$Plain(params?: ApiPurchaseAllGet$Plain$Params, context?: HttpContext): Observable<Array<PurchasesDto>> {
    return this.apiPurchaseAllGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PurchasesDto>>): Array<PurchasesDto> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPurchaseAllGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPurchaseAllGet$Response(params?: ApiPurchaseAllGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PurchasesDto>>> {
    return apiPurchaseAllGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPurchaseAllGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPurchaseAllGet(params?: ApiPurchaseAllGet$Params, context?: HttpContext): Observable<Array<PurchasesDto>> {
    return this.apiPurchaseAllGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PurchasesDto>>): Array<PurchasesDto> => r.body)
    );
  }

  /** Path part for operation `apiPurchaseNewPost()` */
  static readonly ApiPurchaseNewPostPath = '/api/Purchase/new';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPurchaseNewPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPurchaseNewPost$Response(params?: ApiPurchaseNewPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiPurchaseNewPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPurchaseNewPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPurchaseNewPost(params?: ApiPurchaseNewPost$Params, context?: HttpContext): Observable<void> {
    return this.apiPurchaseNewPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
