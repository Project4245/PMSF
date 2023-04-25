import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }
  //  generate token
  public generateToken(login : any){

    return this.http.post(`${baseUrl}/user/login`,login);
  }

  public loginShop(token : any){
    localStorage.setItem("token", token);
    // this.loginStatusSubject.next(true);
    return true;
  }
}
