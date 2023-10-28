/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiHomeGet } from '../fn/home/api-home-get';
import { ApiHomeGet$Params } from '../fn/home/api-home-get';
import { apiHomeGet$Plain } from '../fn/home/api-home-get-plain';
import { ApiHomeGet$Plain$Params } from '../fn/home/api-home-get-plain';

@Injectable({ providedIn: 'root' })
export class HomeService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiHomeGet()` */
  static readonly ApiHomeGetPath = '/api/Home';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHomeGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHomeGet$Plain$Response(params?: ApiHomeGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return apiHomeGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHomeGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHomeGet$Plain(params?: ApiHomeGet$Plain$Params, context?: HttpContext): Observable<string> {
    return this.apiHomeGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHomeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHomeGet$Response(params?: ApiHomeGet$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return apiHomeGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHomeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHomeGet(params?: ApiHomeGet$Params, context?: HttpContext): Observable<string> {
    return this.apiHomeGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
