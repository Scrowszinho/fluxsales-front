import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', pathMatch: 'full', redirectTo: 'my-profile'},
      { path: 'my-profile', component: ProfileComponent },
      { path: 'settings', component: SettingsComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class UserRoute {}
