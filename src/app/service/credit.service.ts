import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credit } from '../model/credit';
import { Observable } from 'rxjs';

const URL = 'http://localhost:8080/api/credits';

@Injectable({
  providedIn: 'root',
})
export class CreditService {
  constructor(private http: HttpClient) {}

  list(): Observable<Credit[]> {
    return this.http.get(URL + '/') as Observable<Credit[]>;
  }

  add(credit: Credit): Observable<Credit> {
    return this.http.post(URL, credit) as Observable<Credit>;
  }

  delete(id: number): Observable<any> {
    return this.http.delete(URL + '/' + id);
  }

  getById(id: number): Observable<Credit> {
    return this.http.get(URL + '/' + id) as Observable<Credit>;
  }

  edit(credit: Credit): Observable<Credit> {
    return this.http.put(URL + '/' + credit.id, credit) as Observable<Credit>;
  }

  getByMovieId(movieId: number): Observable<Credit[]> {
    return this.http.get(URL+"/movie-credits/"+movieId) as Observable<Credit[]>;
  }
}
