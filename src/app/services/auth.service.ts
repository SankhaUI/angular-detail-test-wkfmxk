import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type User = {
  isAuthenticated: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userStatus: boolean;
  authenticatedUser = new BehaviorSubject<User>({ isAuthenticated: false });
  constructor() {}
  public loginUser() {
    this.authenticatedUser.next({ isAuthenticated: true });
    this.userStatus = true;
  }
  public logOutUser() {
    this.authenticatedUser.next({ isAuthenticated: false });
    this.userStatus = false;
  }
  public getAuthStatus() {}
}
