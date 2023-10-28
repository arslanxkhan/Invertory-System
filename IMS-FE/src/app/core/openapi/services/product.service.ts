/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiProductAddPost } from '../fn/product/api-product-add-post';
import { ApiProductAddPost$Params } from '../fn/product/api-product-add-post';
import { apiProductAllGet } from '../fn/product/api-product-all-get';
import { ApiProductAllGet$Params } from '../fn/product/api-product-all-get';
import { apiProductAllGet$Plain } from '../fn/product/api-product-all-get-plain';
import { ApiProductAllGet$Plain$Params } from '../fn/product/api-product-all-get-plain';
import { apiProductDeleteDelete } from '../fn/product/api-product-delete-delete';
import { ApiProductDeleteDelete$Params } from '../fn/product/api-product-delete-delete';
import { apiProductUpdatePut } from '../fn/product/api-product-update-put';
import { ApiProductUpdatePut$Params } from '../fn/product/api-product-update-put';
import { ProductDto } from '../models/product-dto';

@Injectable({ providedIn: 'root' })
export class ProductService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiProductAllGet()` */
  static readonly ApiProductAllGetPath = '/api/Product/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductAllGet$Plain$Response(params?: ApiProductAllGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ProductDto>>> {
    return apiProductAllGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductAllGet$Plain(params?: ApiProductAllGet$Plain$Params, context?: HttpContext): Observable<Array<ProductDto>> {
    return this.apiProductAllGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ProductDto>>): Array<ProductDto> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductAllGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductAllGet$Response(params?: ApiProductAllGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ProductDto>>> {
    return apiProductAllGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductAllGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductAllGet(params?: ApiProductAllGet$Params, context?: HttpContext): Observable<Array<ProductDto>> {
    return this.apiProductAllGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ProductDto>>): Array<ProductDto> => r.body)
    );
  }

  /** Path part for operation `apiProductAddPost()` */
  static readonly ApiProductAddPostPath = '/api/Product/add';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductAddPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductAddPost$Response(params?: ApiProductAddPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiProductAddPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductAddPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductAddPost(params?: ApiProductAddPost$Params, context?: HttpContext): Observable<void> {
    return this.apiProductAddPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiProductUpdatePut()` */
  static readonly ApiProductUpdatePutPath = '/api/Product/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductUpdatePut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductUpdatePut$Response(params?: ApiProductUpdatePut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiProductUpdatePut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductUpdatePut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductUpdatePut(params?: ApiProductUpdatePut$Params, context?: HttpContext): Observable<void> {
    return this.apiProductUpdatePut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiProductDeleteDelete()` */
  static readonly ApiProductDeleteDeletePath = '/api/Product/delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductDeleteDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductDeleteDelete$Response(params?: ApiProductDeleteDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiProductDeleteDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductDeleteDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductDeleteDelete(params?: ApiProductDeleteDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiProductDeleteDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
