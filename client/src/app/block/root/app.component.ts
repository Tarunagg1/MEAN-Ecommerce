import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User } from '../../core/models/user';
import { AuthService } from '@core/authservice/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'client';

  user: Observable<User>;
  userSubscription: Subscription;

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  constructor(private _AuthService: AuthService, private _router: Router) {}

  ngOnInit(): void {
    this.user = this._AuthService.user;

    this.userSubscription = this._AuthService.findMe().subscribe((user) => {            
      this.user = user;
    });
  }

  logout(): void {
    this._AuthService.logoutApiService();
    this._router.navigate(['']);
  }
}
