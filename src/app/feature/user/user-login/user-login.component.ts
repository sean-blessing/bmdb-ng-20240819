import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserLogin } from 'src/app/model/user-login';
import { SystemService } from 'src/app/service/system.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit, OnDestroy{
  title: string = "User Login";
  userLogin: UserLogin = new UserLogin();
  message?: string = undefined;
  subscription!: Subscription;

  constructor(private userSvc: UserService,
              private router: Router,
              private sysSvc: SystemService
  ) {  }

  ngOnInit(): void {
    // invalidate the current loggedInUser
    this.sysSvc.loggedInUser = new User();
    // could set the username and password for testing purposes
    this.userLogin.username = "hgilmore";
    this.userLogin.password = "pwd";
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  login() {
    this.subscription = this.userSvc.login(this.userLogin).subscribe({
      next: (resp) => {
        this.sysSvc.loggedInUser = resp;
        this.router.navigateByUrl("/movie-list");
      },
      error: (err) => {
        this.message = 'Invalid username/pwd combo. Please try again.';
      }
    });
  }

}
