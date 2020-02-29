import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input-field/test.component';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { TopPickMenuComponent } from './top-pick-menu/top-pick-menu.component';
import { OptionsComponent } from './options/options.component'

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    MenuCardComponent,
    MainMenuComponent,
    TopPickMenuComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
