import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSubmitted: boolean;
  constructor(private router: Router) {}
  onLoginSubmit(form: NgForm) {
    this.isSubmitted = true;
    if (!form.valid) return;
    this.router.navigate(['/', 'dashboard']);
  }
  

  ngOnInit() {
  }

}