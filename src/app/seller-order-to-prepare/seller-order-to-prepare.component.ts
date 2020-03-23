import { Component, OnInit } from '@angular/core';
import { PrepareOrderService } from '../prepare-order.service';
import * as $ from 'jquery'

@Component({
  selector: 'app-seller-order-to-prepare',
  templateUrl: './seller-order-to-prepare.component.html',
  styleUrls: ['./seller-order-to-prepare.component.css']
})
export class SellerOrderToPrepareComponent implements OnInit {

  data = [];
  key = "cIxgxhG_jSAiv9cG4F7eY1:APA91bHWBGlESz698oybevnYMmoCaRp45p5x7AC8dHqSdN6W_Xs4UzsM95Vm0ssxFXr8mYJDCdhGbe9vdX5gRVmioQ-26HD6M68XQhvl07UdOjTooDVXIzzemkvcQZk4sFBSOaN-CEJr"
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

    if(item.payload.doc.data().prepared)
      this.showNotification()
  }

  showNotification() {
    // $.ajax({
    //   type: 'POST',
    //   url: "https://fcm.googleapis.com/fcm/send",
    //   headers: {
    //     Authorization: 'key=' + 'AAAAttGmCPo:APA91bF81lvIja0ZvMY1kk_gsCKy7na39Z4rcOqgV729yNYebFfzmNpsD4-wLd8iwf-RrKC5OyqDFxKaGArbZcFA_hN2GgNofquE18dVXgD4LL3gkxKLrcTWHBYAhOD5Cjywv6sQWhkY'
    //   },
    //   contentType: 'application/json',
    //   dataType: 'json',
    //   data: JSON.stringify({ "to": this.key, "notification": { "title": "Success", "body": "Your Order has been Prepared" } }),
    //   success: function (response) {
    //     console.log(response);
    //   },
    //   error: function (xhr, status, error) {
    //     console.log(error);
    //   }
    // });
  }

}
