import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoute } from './user.routing';
import { ProfileComponent } from './profile/profile.component';
import { ProfileSidebarComponent } from "../../components/profile-sidebar/profile-sidebar.component";
import { SettingsComponent } from './settings/settings.component';



@NgModule({
    declarations: [
        ProfileComponent,
        SettingsComponent
    ],
    imports: [
        CommonModule,
        UserRoute,
    ]
})
export class UserModule { }
