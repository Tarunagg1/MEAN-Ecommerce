import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/authservice/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private _router: Router, private _AuthService: AuthService) {}

  registerData = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    repeatpassword: new FormControl('', [
      Validators.required,
      this.passwordMatchFun,
    ]),
  });

  ngOnInit(): void {}

  passwordMatchFun(control: FormControl) {
    let password = control.root.get('password');
    return password && control.value !== password.value
      ? { passwordMatch: true }
      : null;
  }

  register() {
    const registerData = this.registerData.getRawValue();
    if (!this.registerData.valid) {
      return;
    }

    this._AuthService.registerApiService(registerData).subscribe(
      () => {
        this._router.navigate(['/']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  get email() {
    return this.registerData.get('email');
  }

  get repeatpassword() {
    return this.registerData.get('repeatpassword');
  }
}
