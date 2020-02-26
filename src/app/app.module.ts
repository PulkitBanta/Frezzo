import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input-field/test.component';
import { MenuCardComponent } from './menu-card/menu-card.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    MenuCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
