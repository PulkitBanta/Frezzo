import { Component, OnInit, Injectable } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})

@Injectable()
export class OrderListComponent implements OnInit {

  orderItems = [];
  // totalPrice : number;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.cartService.getCartItems().subscribe(res => {
      this.orderItems = res;
    });
  }

  delete(item) {
    let count = item.payload.doc.data().count;
    if (count > 1) {
      this.cartService.deleteCountUpdate(item);
    } else {
      this.cartService.deleteCartOrder(item);
    }
  }
}
