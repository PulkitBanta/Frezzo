import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

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
    this.menuService.addToMenu(menuData);

    // reseting the form
    this.menuForm.reset();
  }
}
