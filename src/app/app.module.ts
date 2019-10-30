import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HeaderstyleDirective} from './directives/headerstyle.directive';
import { HomePageComponent } from './home-page/home-page.component';
import { CardsComponent } from './cards/cards.component';
import { RegestrationComponent } from './regestration/regestration.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomepagestyleDirective } from './directives/homepagestyle.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderstyleDirective,
    HomePageComponent,
    CardsComponent,
    RegestrationComponent,
    FooterComponent,
    HomepagestyleDirective


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
