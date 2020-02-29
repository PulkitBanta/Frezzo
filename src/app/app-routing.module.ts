import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component'
import { SellerComponent } from './seller/seller.component';
import { BuyerComponent } from './buyer/buyer.component';

const routes: Routes = [
    { path: '', component: MainMenuComponent },
    { path: 'buyer', component: BuyerComponent },
    { path: 'seller', component: SellerComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }