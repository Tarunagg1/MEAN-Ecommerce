import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { AuthService } from '@core/authservice/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  ngOnInit(): void {
  }


  
  user: User;
  userSubscription: Subscription;

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  constructor(private _AuthService: AuthService, private _router: Router) {
    this._AuthService.findMe().subscribe((user) => {
      this.user = user;
    });

    this._AuthService.user.subscribe((user) => {
      this.user = user;
    });
  }

  logout(): void {
    this._AuthService.logoutApiService();
    this._router.navigate(['']);
  }
}

