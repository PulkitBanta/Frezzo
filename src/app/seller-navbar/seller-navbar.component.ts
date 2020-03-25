import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-navbar',
  templateUrl: './seller-navbar.component.html',
  styleUrls: ['./seller-navbar.component.css']
})
export class SellerNavbarComponent implements OnInit {

  constructor() { }

  bool = false

  changeBool() {
    this.bool = !(this.bool)
  }

  ngOnInit(): void {
  }

}
