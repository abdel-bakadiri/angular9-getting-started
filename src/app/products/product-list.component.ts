import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from '../service/product.service';
import { Iprodcut } from './model/product';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  title = 'products list !';
  imageWith = 50;
  imageMargin = 2;
  showImage = false;
  rating: number;
  products: Iprodcut[];
  filtredProducts: Iprodcut[] = [];
  private _filterByName: string;
  sub: Subscription;
  errorMessage: string;
  public get filterByName() {
    return this._filterByName;
  }
  public set filterByName(value) {
    this._filterByName = value;
    this.filtredProducts = this.performProducts(value);
  }

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.sub = this.productService.getProduct().subscribe({
      next: (resultat) => {
        this.products = resultat;
        this.filtredProducts = this.performProducts(this.filterByName);
      },
      error: (err) => {
        this.errorMessage = err;
      },
      complete: () => {
        console.log('completed operation');
      },
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  performProducts(filterBy: string): Iprodcut[] {
    return filterBy
      ? this.products.filter((product: Iprodcut) =>
          product.productName.toLowerCase().includes(filterBy.toLowerCase())
        )
      : this.products;
  }
  getvalue(rating: number): void {
    this.title = `Product list ! ${rating}`;
  }
}
