import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Signup } from 'src/app/classes/signup';
import { SignupService } from 'src/app/service/signup.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signup: Signup = new Signup();
  hide = true;

  constructor(private signupService: SignupService, private _snackBar: MatSnackBar,private router: Router) { }


  ngOnInit(): void {
   
  }

  formSubmit() {
    console.log(this.signup);
    if (this.signup.email == '' || this.signup.email == null) {
      // alert('User is required !!');
      this._snackBar.open('userName is required !!!', '', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
  }
   // validation

    // add user : userService
    this.signupService.register(this.signup).subscribe(
      (signup: any) => {
        // Success
        console.log(signup)
        //alert("Success");
        this.router.navigate(['login'])
        // Swal.fire('Successfully done', 'User id is ' + signup.id, 'success')
      },
      (error) => {
        // error
        console.log(error)
        //alert("Something Went Wrong !!!")
        this._snackBar.open('Something went wrong !!', '', {
          duration: 3000,
        });
      }
    )
  }
}
