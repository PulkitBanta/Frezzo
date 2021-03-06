import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AsyncPipe } from '@angular/common';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { TopPickMenuComponent } from './top-pick-menu/top-pick-menu.component';
import { OptionsComponent } from './options/options.component';
import { BuyerComponent } from './buyer/buyer.component';
import { SellerComponent } from './seller/seller.component';
import { OrderListComponent } from './order-list/order-list.component';
import { environment } from 'src/environments/environment';
import { PaymentComponent } from './payment/payment.component';
import { SellerMenuComponent } from './seller-menu/seller-menu.component';
import { FooterComponent } from './footer/footer.component';
import { SellerOrderToPrepareComponent } from './seller-order-to-prepare/seller-order-to-prepare.component';
import { SellerNavbarComponent } from './seller-navbar/seller-navbar.component';
import { SellerFooterComponent } from './seller-footer/seller-footer.component';
import { MessagingService } from './messaging.service';
import { NotFoundComponent } from './not-found/not-found.component';

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
    SellerNavbarComponent,
    SellerFooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule
  ],
  providers: [
    MessagingService,
    AsyncPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
