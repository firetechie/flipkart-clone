import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsService } from './services/products.service';
import { CartService } from './services/cart.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    CartComponent,
  ],
  imports: [CommonModule, BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [ProductsService, CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
