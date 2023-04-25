import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {

  constructor(private _http: HttpClient) { }

  //  Forgot Password
  public forgotPassword(forgotPassword: any) {
    return this._http.post(`${baseUrl}/user/forgotPassword`, forgotPassword);
  }
}
