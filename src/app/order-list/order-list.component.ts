import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orderItems = [];
  // totalPrice : number;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.orderItems = this.cartService.getCartItems();
  }

}