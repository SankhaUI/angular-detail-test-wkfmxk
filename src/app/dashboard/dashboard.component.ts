import { Component, OnDestroy, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { productListdata } from '../../assets/data';
import { AuthService } from '../services/auth.service';
//import { AuthService } from '../services/auth.service';
import { DashboardService } from '../services/dashboard.service';
export type ProductListType = {
  id: number;
  name: string;
  type: string;
  price: number;
  units: number;
  manufacturing: string;
};
type frozenColumg = {
  id: boolean;
  name: boolean;
  type: boolean;
  price: boolean;
  units: boolean;
  manufacturing: boolean;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  productList: ProductListType[];
  isAuthenticateUser: Subscription;
  frozen: frozenColumg;
  constructor(
    private _dashboardService: DashboardService,
    private router: Router,
    private authService: AuthService
  ) {
    this.productList = productListdata;
    this.frozen = {
      id: false,
      name: false,
      type: false,
      price: false,
      units: false,
      manufacturing: false,
    };
  }

  ngOnInit() {
    this.isAuthenticateUser = this.authService.authenticatedUser.subscribe(
      (resp) => {
        if (!resp.isAuthenticated) {
          this.router.navigate(['/']);
        }
      }
    );
  }
  ngOnDestroy() {
    this.isAuthenticateUser.unsubscribe();
  }

  testInterCeoptop() {
    this._dashboardService
      .fakeInterCeptopcall()
      .subscribe((data) => console.log(data));
  }
  onproductNameClick(product: ProductListType) {
    this.router.navigate([`/product-details/${product.id}`]);
  }
}
