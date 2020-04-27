import { Injectable } from '@angular/core';
import {TWITS} from './mock-twits';
import {Observable, of} from 'rxjs';
import {Twit} from './twit';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TwitService {
  BASE_URL = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) { }

  getTwits(): Observable<Twit[]>{
    return this.http.get<Twit[]>(`${this.BASE_URL}/api/twits/`);
  }
  getTwitsByUserId(userId: number): Observable<Twit[]>{
    return this.http.get<Twit[]>(`${this.BASE_URL}/api/twits/${id}/`);
  }
  getTwitById(userId: number): Observable<Twit>{
    return this.http.get<Twit>(`${this.BASE_URL}/api/twits/${id}/`);
  }

  addTwit(twit: Twit): void{
    TWITS.push(twit);

  }
  
  login(username, password): Observable<LoginResponse> {
    // console.log(`${this.BASE_URL}/api/login/` + ' URL ' + username + ' ' + password);
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    });
}
