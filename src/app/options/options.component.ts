import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor() { }
  bool = false

  changeBool() {
    this.bool = !(this.bool);
    console.log("working " + this.bool)
  }
  ngOnInit() {
    
  }

}
