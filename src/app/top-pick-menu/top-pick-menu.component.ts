import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-top-pick-menu',
  templateUrl: './top-pick-menu.component.html',
  styleUrls: ['./top-pick-menu.component.css']
})
export class TopPickMenuComponent implements OnInit {

  constructor(
    private cartService: CartService,
    private firestore: AngularFirestore
  ) { }

  items = [];

  ngOnInit() {
    this.getTopPickItems().subscribe(res => {
      this.items = res;
    });
  }

  addToCart(item) {
    this.cartService.addToCart(item);
  }

  addToTopPick(item) {
    return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("top-pick")
          .add(item)
          .then(res => {console.log("Item Added to firebase")}, err => {reject(err); console.log("error occured")});
  });
  }

  getTopPickItems() {
    return this.firestore.collection("top-pick").snapshotChanges();
  }

}
