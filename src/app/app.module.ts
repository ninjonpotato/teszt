import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JelenlegiAjanlatokComponent } from './jelenlegi-ajanlatok/jelenlegi-ajanlatok.component';
import { KozelgoAkciokComponent } from './kozelgo-akciok/kozelgo-akciok.component';
import { AkciosTermekekComponent } from './akcios-termekek/akcios-termekek.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JelenlegiAjanlatokComponent,
    KozelgoAkciokComponent,
    AkciosTermekekComponent,
    CarouselComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
