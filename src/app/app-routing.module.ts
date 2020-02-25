import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { InputComponent } from './input-field/test.component'

const routes: Routes = [
    { path: '', component: InputComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }