import { Injectable } from '@angular/core';
import { User } from './user';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersUrl = 'http://localhost:8081/Web_4_Jan_Web_exploded/Controller?action=GetUsers';

  constructor(
    private http: HttpClient,
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
}
