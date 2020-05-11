import { ProductDetailsComponent } from './../products/product-details.component';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iprodcut } from './../products/model/product';
import { Observable, throwError, Subscription } from 'rxjs';
import { tap, catchError, map, filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private productUrl = 'api/products/products.json';
  constructor(private http: HttpClient) {}
  getProduct(): Observable<Iprodcut[]> {
    return this.http.get<Iprodcut[]>(this.productUrl).pipe(
      tap((product) => console.log(product)),
      catchError(this.handleError)
    );
  }

  getBroductById(id: number): Observable<Iprodcut> {
    return this.getProduct().pipe(
      map((products: Iprodcut[]) => products.find((p) => p.productId === id))
    );
  }

  private handleError(err: HttpErrorResponse) {
    let messageError = '';
    if (err instanceof ErrorEvent) {
      messageError = `A Network erro occured : ${err.error.message}`;
    } else {
      messageError = `The code of error is ${err.status} with message ${err.message} `;
    }
    console.log(messageError);
    return throwError(messageError);
  }
}
