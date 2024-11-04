import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actor } from '../model/actor';
import { Observable } from 'rxjs';

const URL = 'http://localhost:8080/api/actors';

@Injectable({
  providedIn: 'root',
})
export class ActorService {
  constructor(private http: HttpClient) {}

  list(): Observable<Actor[]> {
    return this.http.get(URL + '/') as Observable<Actor[]>;
  }

  add(actor: Actor): Observable<Actor> {
    return this.http.post(URL, actor) as Observable<Actor>;
  }

  delete(id: number): Observable<any> {
    return this.http.delete(URL + '/' + id);
  }

  getById(id: number): Observable<Actor> {
    return this.http.get(URL + '/' + id) as Observable<Actor>;
  }

  edit(actor: Actor): Observable<Actor> {
    return this.http.put(URL + '/' + actor.id, actor) as Observable<Actor>;
  }
}
