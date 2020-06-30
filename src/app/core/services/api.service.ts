import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

import {catchError} from 'rxjs/operators';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
  ) {}

  private formatErrors(error: any) {
    return  throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams(), responseType): Observable<any> {
    return this.http.get(`${path}`, { params, responseType })
      .pipe(catchError(this.formatErrors));
  }

  getResponseTypeText(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${path}`, { params, responseType: 'text' })
      .pipe(catchError(this.formatErrors));
  }

}
