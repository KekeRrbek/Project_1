import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from './user';
import {USERS} from './mock-users';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) { }
    getUswes(): Observable<User[]> {
    return this.http.get<User[]>(`${this.BASE_URL}/api/users/`);
  }

  getUserById(id: number): Observable<User>{
    return this.http.get<User>(`${this.BASE_URL}/api/users/${id}`);
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/api/users/${id}/`);
  }
}
