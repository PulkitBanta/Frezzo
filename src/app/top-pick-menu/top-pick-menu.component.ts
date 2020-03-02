import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-pick-menu',
  templateUrl: './top-pick-menu.component.html',
  styleUrls: ['./top-pick-menu.component.css']
})
export class TopPickMenuComponent implements OnInit {

  constructor() { }
  items = [];

  card = {
    name : 'Pizza',
    price: '120',
    src: '../../assets/fast food.jpg'
  }

  ngOnInit() {
    this.items.push(this.card);
    this.items.push(this.card);
    this.items.push(this.card);
    this.items.push(this.card);
    // console.log(this.items)
  }

}
