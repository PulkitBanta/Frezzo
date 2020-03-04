import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(
    private firestore: AngularFirestore
  ) { }

  
  addToFirebase(data) {
    return new Promise<any>((resolve, reject) =>{
      this.firestore
      .collection("menu")
      .add(data)
      .then(res => {console.log("Item Added to firebase")}, err => {reject(err); console.log("error occured")});
    });
  }
  
  getMenu() {
    return this.firestore.collection("menu").snapshotChanges();
  }
}
