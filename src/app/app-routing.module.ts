import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { InputComponent } from './input-field/test.component';
import { MenuComponent } from './menu/menu.component'

const routes: Routes = [
    { path: '', component: MenuComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }