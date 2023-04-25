import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private _http: HttpClient) { }

  //  Register
  public register(signup: any) {
    return this._http.post(`${baseUrl}/user/signup`, signup);
  }
}
