import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  form!: FormGroup;
  constructor (
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      'email': ['', [Validators.email]],
      'password': ['', []],
    });
  }

  createAccount(): void {
    this.router.navigate(['login/signout']);
  }

}
