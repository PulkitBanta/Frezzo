import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { TestComponent } from './test/test.component'

const routes: Routes = [
    { path: '', component: TestComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }