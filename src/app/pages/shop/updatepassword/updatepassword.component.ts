import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Updatepassword } from 'src/app/classes/updatepassword';
import { UpdatepasswordService } from 'src/app/service/updatepassword.service';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent {
  updatepassword: Updatepassword = new Updatepassword();
  hide = true;

  constructor(private _snake: MatSnackBar, private updatepasswordService: UpdatepasswordService, private router: Router) { }

  formSubmit() {
    console.log("Login Form Submitted ...")
    if (this.updatepassword.oldPassword.trim() == '' ||
      this.updatepassword.oldPassword == null) {
      this._snake.open('Old Password is required !! ', '', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }
    // validation

    // add user : userService
    this.updatepasswordService.updatePassword(this.updatepasswordService).subscribe(
      (updatePassword: any) => {
        // Success
        console.log(updatePassword)
        //alert("Success");
        this.router.navigate(['login'])
        // Swal.fire('Successfully done', 'User id is ' + signup.id, 'success')
      },
      (error) => {
        // error
        console.log(error)
        //alert("Something Went Wrong !!!")
        this._snake.open('Something went wrong !!', '', {
          duration: 3000,
        });
      }
    )
  }
}

