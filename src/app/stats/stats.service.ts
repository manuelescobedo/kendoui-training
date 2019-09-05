import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStat } from './stat';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(
    private _http: HttpClient
  ) { }

  fetchGeneralStats(): Observable<Array<IStat>> {
    const URL = '/api/stats';
    return this._http.get<Array<IStat>>(URL)
      .pipe(delay(1000));
  }
}
