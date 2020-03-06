import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { TopPickMenuComponent } from './top-pick-menu/top-pick-menu.component';
import { OptionsComponent } from './options/options.component';
import { BuyerComponent } from './buyer/buyer.component';
import { SellerComponent } from './seller/seller.component';
import { OrderListComponent } from './order-list/order-list.component';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { PaymentComponent } from './payment/payment.component';
import { SellerMenuComponent } from './seller-menu/seller-menu.component';
import { FooterComponent } from './footer/footer.component';
import { SellerOrderToPrepareComponent } from './seller-order-to-prepare/seller-order-to-prepare.component';
import { SellerNavbarComponent } from './seller-navbar/seller-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyerComponent,
    MainMenuComponent,
    OptionsComponent,
    TopPickMenuComponent,
    SellerComponent,
    OrderListComponent,
    PaymentComponent,
    SellerMenuComponent,
    FooterComponent,
    SellerOrderToPrepareComponent,
    SellerNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
