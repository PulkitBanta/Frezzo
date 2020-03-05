import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentForm
  cartItems
  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.paymentForm = this.formBuilder.group({
      firstName: "",
      lastName: "",
      email: "",
      number: "",
    })

    this.cartService.getCartItems().subscribe(res => {
      this.cartItems = res;
    });
  }

  clearCart() {
    // clearing the cart
    for (let item of this.cartItems) {
      this.cartService.deleteCartOrder(item)
    }

    // reseting the form
    this.paymentForm.reset()
  }

}
