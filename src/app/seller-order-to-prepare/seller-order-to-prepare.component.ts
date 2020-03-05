import { Component, OnInit } from '@angular/core';
import { PrepareOrderService } from '../prepare-order.service';

@Component({
  selector: 'app-seller-order-to-prepare',
  templateUrl: './seller-order-to-prepare.component.html',
  styleUrls: ['./seller-order-to-prepare.component.css']
})
export class SellerOrderToPrepareComponent implements OnInit {

  data = [];
  constructor(
    private prepareOrder: PrepareOrderService
  ) { }

  ngOnInit(): void {
    this.prepareOrder.getOrders().subscribe(res => {
      this.data = res;
    })
  }

  updateOrder(item) {
    this.prepareOrder.updateOrder(item)
  }

}
