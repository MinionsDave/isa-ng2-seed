import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  username: AbstractControl;
  password: AbstractControl;

  constructor(
    fb: FormBuilder,
    private _router: Router
    ) {
    this.form = fb.group({
      'username': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.compose([Validators.required])]
    });

    this.username = this.form.controls['username'];
    this.password = this.form.controls['password'];
  }

  onSubmit(values: Object) {
    if (this.form.valid) {
      console.log(values);
      this._router.navigate(['/pages/dashboard']);
    }
  }
}
