import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products: any = [];

  constructor(
    private productService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;

      this.products.forEach((a: { price: any }) => {
        Object.assign(a, { quantity: 0, total: a.price });
      });
    });
  }

  addCart(product: any): void {
    console.log('clicked');
    this.cartService.addToCart(product);
  }
}
