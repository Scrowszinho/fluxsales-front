import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { ICreateUser, ICreatedUser } from '../interfaces/signup-interface';
import { SnackBarService } from 'src/app/components/snackbar/snackbar.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  form!: FormGroup;
  constructor (
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _service: LoginService,
    private _snackbar: SnackBarService
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this._formBuilder.group({
      'name': ['', [Validators.required]],
      'email': ['', [Validators.email, Validators.required]],
      'document': ['', [Validators.required]],
      'phone': ['', [Validators.required]],
      'password': ['', [Validators.required]],
      'passwordConfirm': ['', [Validators.required]],
    });
  }

  doRegister(): void {
    if(!this.form.invalid) return;
    const data: ICreatedUser = this.form.getRawValue();
    if(data.password !== data.passwordConfirm) return;
    const user : ICreateUser = {
      email: data.email,
      password: data.password,
      name: data.name
    };
    this._service.registerUser(user).subscribe({
      next: () => {
        this._router.navigate(['/']);
      },
      error: error => {        
        this._snackbar.open(error.error.message, 'Ok')
      }
    });
    
  }

  createAccount(): void {
    this._router.navigate(['login/signin']);
  }
}
