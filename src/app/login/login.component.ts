import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isSubmitted: boolean;
  constructor(private router: Router, private authService: AuthService) {}
  onLoginSubmit(form: NgForm) {
    this.isSubmitted = true;
    if (!form.valid) return;
    this.authService.loginUser();
    this.router.navigate(['/', 'dashboard']);
  }

  ngOnInit() {}
}
