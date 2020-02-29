import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {

  menuItems = [];
  constructor(
      private menuService: MenuService
    ) { }

  ngOnInit() {
    this.menuItems = this.menuService.getMenu();
  }

}
