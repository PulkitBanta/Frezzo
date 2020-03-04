import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(
    private firestore: AngularFirestore
  ) { }

  addToMenu(data) {
    return new Promise<any>((resolve, reject) =>{
      this.firestore
      .collection("menu")
      .add(data)
      .then(res => {console.log("Success!")}, err => {reject(err); console.log("Error occured / Not Added")});
    });
  }
  
  getMenu() {
    return this.firestore.collection("menu").snapshotChanges();
  }

  updateMenu(data) {
    return this.firestore
          .collection("menu")
          .doc(data.payload.doc.id)
          .set({ available: !data.payload.doc.data().available }, {merge: true})
  }
}
