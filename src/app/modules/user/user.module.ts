import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoute } from './user.routing';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoute
  ]
})
export class UserModule { }
