import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderAreaComponent } from './header-area/header-area.component';
import { SiteBrandingAreaComponent } from './site-branding-area/site-branding-area.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderAreaComponent } from './slider-area/slider-area.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderAreaComponent,
    SiteBrandingAreaComponent,
    NavbarComponent,
    SliderAreaComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
