import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { ProductListType } from '../../dashboard/dashboard.component';
import { productListdata } from '../../../assets/data';
import { AuthService, User } from '../../services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [MessageService],
})
export class ProductComponent implements OnInit {
  isAuthenticateUser: Subscription;
  submitted: boolean;
  productList: ProductListType[];
  productId: string | null;
  isDirty: boolean = true;
  productDetailsForm: FormGroup;
  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.productList = productListdata;
    this.productId = this.route.snapshot.paramMap.get('id');
    this.isAuthenticateUser = this.authService.authenticatedUser.subscribe(
      (resp) => {
        if (!resp.isAuthenticated) {
          this.router.navigate(['/']);
        }
      }
    );
    this.productDetailsForm = this.formBuilder.group({
      nameControlerInput: ['', Validators.required],
      typeControlerInput: ['', Validators.required],
      priceControlerInput: ['', Validators.required],
      unitsControlerInput: ['', Validators.required],
      manufacturingControlerInput: ['', Validators.required],
    });
    this.getProductData();
  }
  ngOnDestroy() {
    this.isAuthenticateUser.unsubscribe();
  }
  getProductData() {
    if (this.productId) {
      const product = this.productList?.filter(
        (i) => i.id?.toString() === this.productId
      )?.[0];
      this.productDetailsForm.setValue({
        nameControlerInput: product.name,
        typeControlerInput: product.type,
        priceControlerInput: product.price,
        unitsControlerInput: product.units,
        manufacturingControlerInput: product.manufacturing,
      });
    }
  }
  submitproductDetailsForm() {
    this.submitted = true;
    this.messageService.add({
      key: 'tl',
      severity: 'success',
      summary: 'Success',
      detail: 'Data will be saved with Real APIS',
    });
  }
}
