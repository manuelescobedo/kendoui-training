import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IMatch } from './round/match';

@Injectable({
  providedIn: 'root'
})
export class RoundService extends BehaviorSubject<Array<IMatch>> {

  constructor(
    private _http: HttpClient
  ) {
    super([]);
  }

  private data = [];

  fetchRoundMatches(round = 1): Observable<Array<IMatch>> {
    const URL = `/api/matches?round=^${round}$`;
    const http = this._http.get<Array<IMatch>>(URL)
      .pipe(
        tap(data => {
          this.data = data;
        })
      );
    http.subscribe(data => {
      super.next(data);
    });
    return http;
  }

  updateMatchScore(id, match: IMatch): Observable<IMatch> {
    const URL = `/api/matches/${id}`;
    const http = this._http.put<IMatch>(URL, match);
    http.subscribe(() => this.fetchRoundMatches(match.round));
    return http;
  }
}
