import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputComponent } from './input-field/test.component';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { TopPickMenuComponent } from './top-pick-menu/top-pick-menu.component';
import { OptionsComponent } from './options/options.component';
import { BuyerComponent } from './buyer/buyer.component';
import { SellerComponent } from './seller/seller.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyerComponent,
    InputComponent,
    MainMenuComponent,
    MenuCardComponent,
    OptionsComponent,
    TopPickMenuComponent,
    SellerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
