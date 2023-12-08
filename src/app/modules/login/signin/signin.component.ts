import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { SnackBarService } from 'src/app/components/snackbar/snackbar.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  form!: FormGroup;
  constructor (
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _snackbar: SnackBarService,
    private _service: LoginService
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this._formBuilder.group({
      'email': ['', [Validators.email, Validators.required]],
      'password': ['', [Validators.required]],
    });
  }

  createAccount(): void {
    this._router.navigate(['login/signout']);
  }

  doLogin(): void {
    if(this.form.invalid) return;
    this._service.authenticate(this.form.getRawValue()).subscribe({
      next: () => {
        this._router.navigate(['/']);
      },
      error: error => {
        this._snackbar.open(error.error.message, 'Ok')
      }
    })
  }

  doGoogleLogin(): void {
    this._service.doGoogleLogin().subscribe({
      next: res => {
        console.log(res);
        
      }
    })
  }

}
