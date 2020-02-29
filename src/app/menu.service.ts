import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menu = [];
  constructor() { }

  getMenu() {
    return this.menu;
  }

  addToMenu(data) {
    this.menu.push(data);
  }
}
