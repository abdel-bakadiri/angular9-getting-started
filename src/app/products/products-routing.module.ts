import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductDetailsComponent } from './product-details.component';
import { DetailsProductGuard } from './guards/details-product.guard';

const routesChild = [
  { path: 'products', component: ProductListComponent },
  {
    path: 'products/:id',
    component: ProductDetailsComponent,
    canActivate: [DetailsProductGuard],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routesChild)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
