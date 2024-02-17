import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
  { path: '', title: 'Flipkart Clone', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', title: 'Products', component: ProductsComponent },
  { path: 'cart', title: 'Cart', component: CartComponent },
];
