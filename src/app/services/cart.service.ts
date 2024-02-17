import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  cartItemList: any = [];
  productItemList = new BehaviorSubject<any>([]);

  getProduct() {
    return this.productItemList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productItemList.next(product);
  }

  addToCart(product: any) {
    this.cartItemList.push(product);
    this.productItemList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList, 'cartItemList');
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => (grandTotal += a.total));
    return grandTotal;
  }

  removeProductFromCart(product: any) {
    this.cartItemList.map((a: { id: any }, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 0);
      }
    });
    this.productItemList.next(this.cartItemList);
  }

  removeAllProductFromCart() {
    this.cartItemList = [];
    this.productItemList.next(this.cartItemList);
    this.productItemList.next(this.cartItemList);
  }
}
