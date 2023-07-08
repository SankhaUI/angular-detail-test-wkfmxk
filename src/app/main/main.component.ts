import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private authService: AuthService) {}
  isAuthenticateUser: Subscription;
  validUser: boolean;
  ngOnInit() {
    this.isAuthenticateUser = this.authService.authenticatedUser.subscribe(
      (resp) => (this.validUser = resp.isAuthenticated)
    );
  }
  ngOnDestroy() {
    this.isAuthenticateUser.unsubscribe();
  }
  logout() {
    this.authService.logOutUser();
  }
}
