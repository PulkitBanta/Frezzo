import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = [];
  constructor(
    private firestore: AngularFirestore
  ) { }

  addToCart(product) {
    let name = product.payload.doc.data().name;
    let price = product.payload.doc.data().price;
    let data = {
      name: name,
      price: price
    }

    return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("cart")
          .add(data)
          .then(res => {console.log("Added To Cart")}, err => {reject(err); console.log("Error occured / Not Added")});
  });
  }

  getCartItems() {
    return this.firestore.collection("cart").snapshotChanges();
  }

  deleteCartOrder(data) {
    this.firestore
        .collection("cart")
        .doc(data.payload.doc.id)
        .delete();
  }
}
