import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class PrepareOrderService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  toPrepare(item) {
    let name = item.payload.doc.data().name;
    let prepared = false;
    let data = {
      name: name,
      prepared: prepared
    }

    return new Promise<any>((resolve, reject) =>{
      this.firestore
      .collection("order-to-prepare")
      .add(data)
      .then(res => {console.log("Success!")}, err => {reject(err); console.log("Error occured / Not Added")});
    });
  }

  getOrders() {
    return this.firestore.collection("order-to-prepare").snapshotChanges();
  }

  updateOrder(data) {
    return this.firestore
          .collection("order-to-prepare")
          .doc(data.payload.doc.id)
          .set({ prepared: !data.payload.doc.data().prepared }, {merge: true})
  }
}
