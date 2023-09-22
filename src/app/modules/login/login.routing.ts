import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'signin', component: SigninComponent },
      { path: 'signout', component: SignupComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class LoginRoute {}