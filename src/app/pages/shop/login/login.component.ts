import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Login } from 'src/app/classes/login';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: Login = new Login();
  hide = true;

  constructor(private snake: MatSnackBar, private loginService: LoginService, private router: Router) { }

  formSubmit() {
    console.log("Login Form Submitted ...")
    if (this.login.email.trim() == '' ||
      this.login.email == null) {
      this.snake.open('Email Id is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    if (this.login.password.trim() == '' ||
      this.login.password == null) {
      this.snake.open('Password is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    // Request to server to generate token
    this.loginService.generateToken(this.login).subscribe(
      (data: any) => {
        console.log("Success");
        console.log(data);

        // login...
        // this.loginService.loginShop(data.token);

        // this.login.getCurrentUser().subscribe(
          // (user: any) => {
          //   this.login.setUser(user);
          //   console.log(user);

        // redirect ... ADMIN : admin-dashbord
        // redirect ... NORMAL : normal-dashbord

        // if (this.login.getUserRole() == "ADMIN") {
        //   // admin dashboard
        //   // window.location.href='/admin'
          this.router.navigate(['shop-dashboard'])
        //   this.login.loginStatusSubject.next(true);
        // } else if (this.login.getUserRole() == 'NORMAL') {
        //   // normal user dashboard
        //   // window.location.href='/user-dashboard'
        //   this.login.loginStatusSubject.next(true);
        //   this.router.navigate(['user-dashboard/0'])
        // } else {
        //   this.login.logout();
        //   location.reload();
        // }

        // }
        // );

      },
      (error) => {
        console.log("Error !!!");
        console.log(error);
      }

    )

  }

}

