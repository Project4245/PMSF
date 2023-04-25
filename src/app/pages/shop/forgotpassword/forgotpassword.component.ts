import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Forgotpassword } from 'src/app/classes/forgotpassword';
import { ForgotpasswordService } from 'src/app/service/forgotpassword.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {

  forgotpassword: Forgotpassword = new Forgotpassword();
  hide = true;

  constructor(private _snackBar: MatSnackBar, private forgotpasswordService: ForgotpasswordService, private router: Router) { }

  formSubmit() {
    console.log(this.forgotpassword);
    if (this.forgotpassword.email == '' || this.forgotpassword.email == null) {
      // alert('User is required !!');
      this._snackBar.open('Email Id is required !!!', '', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }
    // validation

    // add user : userService
    this.forgotpasswordService.forgotPassword(this.forgotpassword).subscribe(
      (forgotpassword: any) => {
        // Success
        console.log(forgotpassword)
        //alert("Success");
        this.router.navigate(['updatePassword'])
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
