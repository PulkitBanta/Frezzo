import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { CartService } from '../cart.service'; 

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {

  menuItems = [];
  constructor(
      private menuService: MenuService,
      private cartService: CartService
    ) { }

  ngOnInit() {
    this.menuItems = this.menuService.getMenu();
  }

  addToCart(item) {
    this.cartService.addToCart(item);
  }

}
