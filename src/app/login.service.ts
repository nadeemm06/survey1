import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Login } from './login';
import { Observable } from 'rxjs';
import { LoginStatus } from './login-status';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isUserLoggedIn = false;

  isUserLogin() {
    if (this.isUserLoggedIn) {
      return true;
    } else {
      return false;
    }
  }

  constructor(private http: HttpClient) { }

  login(login: Login) : Observable<LoginStatus> {
    let url = 'http://localhost:8080/login';
    return this.http.post<LoginStatus>(url, Login);
  }
}
