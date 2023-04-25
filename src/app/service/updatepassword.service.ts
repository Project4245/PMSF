import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UpdatepasswordService {

  constructor(private _http: HttpClient) { }

  //  Forgot Password
  public updatePassword(updatePassword: any) {
    return this._http.post(`${baseUrl}/user/changePassword`, updatePassword);
  }
}
