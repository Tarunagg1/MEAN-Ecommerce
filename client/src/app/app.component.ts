import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from './models/user';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  title = 'client';

  user:User;
  userSubscription:Subscription;

  ngOnDestroy(): void {
      if(this.userSubscription){
        this.userSubscription.unsubscribe();
      }
  }

  constructor(private _AuthService: AuthService,private _router: Router){
    this._AuthService.user.subscribe((user) =>{
      this.user = user;
    })
  }

  logout(): void{
    this._AuthService.logoutApiService();
    this._router.navigate(['']);
  }

}
