import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoute } from './login.routing';
import { PipesModule } from "../../pipes/pipes.module";
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { InputsModule } from "../../components/inputs/inputs.module";
import { LoginService } from './login.service';
import { SnackBarService } from 'src/app/components/snackbar/snackbar.service';



@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent
    ],
    providers: [
        SnackBarService,
        LoginService
    ],
    imports: [
        LoginRoute,
        CommonModule,
        PipesModule,
        InputsModule
    ]
})
export class LoginModule { }
