import { Injectable } from '@angular/core';
import { Authenticate, User } from '@demo-app/data-models';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  private userSubject$ = new BehaviorSubject<User>(null);
  user$ = this.userSubject$.asObservable();
  constructor(private httpClient: HttpClient) {
    const user = localStorage.getItem('user');
    if (user) {
      this.userSubject$.next(JSON.parse(user));
    }
  }

  login(authenticate: Authenticate): Observable<User> {
    return this.httpClient.post<User>(
      'http://localhost:3000/login',
      authenticate
    ).pipe(tap((user: User) => {
      this.userSubject$.next(user);
      localStorage.setItem('user', JSON.stringify(user));
    }));
  }
}
