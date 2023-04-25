import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/shop/login/login.component';
import { SignupComponent } from './pages/shop/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopdashboardComponent } from './pages/shop/shopdashboard/shopdashboard.component';
import { ForgotpasswordComponent } from './pages/shop/forgotpassword/forgotpassword.component';
import { UpdatepasswordComponent } from './pages/shop/updatepassword/updatepassword.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'forgotPassword',
    component: ForgotpasswordComponent,
    pathMatch: 'full',
  },
  {
    path: 'updatePassword',
    component: UpdatepasswordComponent,
    pathMatch: 'full',
  },
  {
    path: 'shop-dashboard',
    component: ShopdashboardComponent,
    children: [

    ]
  }]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
