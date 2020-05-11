import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [AppComponent, WelcomeComponent, NotFoundPageComponent],
  imports: [BrowserModule, HttpClientModule, ProductsModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
