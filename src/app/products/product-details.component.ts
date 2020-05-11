import { Subscription } from 'rxjs';
import { ProductService } from './../service/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iprodcut } from './model/product';

@Component({
  selector: 'pm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  titlePage = 'Details product';
  product: Iprodcut;
  productId: number;
  subcription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.subcription = this.productService
      .getBroductById(this.productId)
      .subscribe((product) => (this.product = product));
  }
  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
  onBack() {
    this.router.navigate(['/products']);
  }
}
