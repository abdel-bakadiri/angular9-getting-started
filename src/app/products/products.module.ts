import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StarComponent } from './../shared/star/star.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacePipe } from './../shared/convert-to-space.pipe';
import { ProductDetailsComponent } from './product-details.component';
import { ProductListComponent } from './product-list.component';
import { DetailsProductGuard } from './guards/details-product.guard';

@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent],
  imports: [SharedModule, ProductsRoutingModule],
  exports: [],
})
export class ProductsModule {}
