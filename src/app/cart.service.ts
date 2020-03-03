import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = [];
  constructor() { }

  addToCart(product) {
    this.cartItems.push(product);
  }

  getCartItems() {
    return this.cartItems;
  }
}
