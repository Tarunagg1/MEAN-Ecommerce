import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginData = {
    email: '',
    password: '',
  };
  constructor(private _router: Router, private _AuthService: AuthService) {}

  ngOnInit(): void {}

  login() {
    this._AuthService.loginApiService(this.loginData).subscribe((result) => {
      this._router.navigate(['']);
    });
  }

  

}
