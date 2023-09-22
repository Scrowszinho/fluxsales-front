import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
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
      'name': ['', []],
      'email': ['', [Validators.email]],
      'document': ['', []],
      'password': ['', []],
      'passwordConfirm': ['', []],
    });
  }

  createAccount(): void {
    this.router.navigate(['login/signin']);
  }
}
