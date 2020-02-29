import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {

  menuForm;
  constructor(
    private formBuilder: FormBuilder,
    private menuService: MenuService
    ) { }

  ngOnInit() {
    this.menuForm = this.formBuilder.group({
      name: "",
      price: ""
    })
  }

  onSubmit(menuData) {
    alert("Your product has been submitted")
    console.log(menuData);
    this.menuService.addToMenu(menuData);
  }

}
