import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  products: any = [];
  grandTotal!: number;
  cartDisplayFlag: boolean = this.products.length > 0 ? true : false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProduct().subscribe((res) => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }

  removeItem(product: any) {
    this.cartService.removeProductFromCart(product);
  }

  removeAllItems() {
    this.cartService.removeAllProductFromCart();
  }
}
