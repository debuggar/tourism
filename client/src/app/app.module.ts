import { AppRouting } from './app.routing';
import { HomeComponent } from './home/home.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent, HomeComponent , HolidaysComponent, HeaderComponent, FooterComponent
  ],
  imports: [
    BrowserModule, AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
