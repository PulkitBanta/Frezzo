import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(
    private firestore: AngularFirestore
  ) { }

  addToCart(product, count) {
    let name = product.payload.doc.data().name;
    let price = product.payload.doc.data().price;
    let data = {
      name: name,
      price: price,
      count: count
    }

    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("cart")
        .add(data)
        .then(res => { console.log("Added To Cart") }, err => { reject(err); console.log("Error occured / Not Added") });
    });
  }

  updateCount(data) {
    let amount = data.payload.doc.data().count + 1;
    return this.firestore
      .collection("cart")
      .doc(data.payload.doc.id)
      .set({ count: amount }, { merge: true })
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

  deleteCountUpdate(data) {
    let amount = data.payload.doc.data().count - 1;
    return this.firestore
      .collection("cart")
      .doc(data.payload.doc.id)
      .set({ count: amount }, { merge: true })
  }

  countItems(data, item) {
    var i = -1;
    for (i = 0; i < data.length; i++) {
      if (data[i].payload.doc.data().name == item.payload.doc.data().name) {
        return i;
      }
    }
  }
}
