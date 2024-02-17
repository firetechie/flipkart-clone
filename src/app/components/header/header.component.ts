import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  totalProducts: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService
      .getProduct()
      .subscribe((res) => (this.totalProducts = res.length));
  }
}
