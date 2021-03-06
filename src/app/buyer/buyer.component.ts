import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {

  data = [];
  orderItemsList = []
  constructor(
    private menuService: MenuService,
    private cartService: CartService
  ) { }

  ngOnInit() {

    this.menuService.getMenu().subscribe(res => {
      this.data = res;
    });

    this.cartService.getCartItems().subscribe(res => {
      this.orderItemsList = res;
    });

  }

  addToCart(item) {
    let count = this.cartService.countItems(this.orderItemsList, item);
    if (count >= 0) {
      this.cartService.updateCount(this.orderItemsList[count]);
    } else {
      this.cartService.addToCart(item, 1);
    }
  }
}
