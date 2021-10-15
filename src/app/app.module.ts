import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageCarouselComponent } from './homepage-carousel/homepage-carousel.component';
import { CategoryDisplayComponent } from './category-display/category-display.component';
import { CategoryFilterNavbarComponent } from './category-filter-navbar/category-filter-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageCarouselComponent,
    CategoryDisplayComponent,
    CategoryFilterNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
