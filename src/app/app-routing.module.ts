import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component'
import { SellerComponent } from './seller/seller.component';
import { BuyerComponent } from './buyer/buyer.component';

const routes: Routes = [
    { path: '', component: BuyerComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }