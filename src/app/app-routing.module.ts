import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component'
import { SellerComponent } from './seller/seller.component';
import { BuyerComponent } from './buyer/buyer.component';
import { OrderListComponent } from './order-list/order-list.component';
import { SellerMenuComponent } from './seller-menu/seller-menu.component';
import { PaymentComponent } from './payment/payment.component';
import { SellerOrderToPrepareComponent } from './seller-order-to-prepare/seller-order-to-prepare.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    { path: '', component: MainMenuComponent },
    { path: 'buyer', component: BuyerComponent },
    { path: 'seller', component: SellerMenuComponent },
    { path: 'orderList', component: OrderListComponent },
    { path: 'addProduct', component: SellerComponent},
    { path: 'payment', component: PaymentComponent },
    { path: 'toPrepare', component: SellerOrderToPrepareComponent},
    { path: '**' , component: NotFoundComponent},
    { path: '**', redirectTo: '404'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }