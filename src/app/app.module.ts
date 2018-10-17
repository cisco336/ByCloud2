import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
import { ContentService } from './content.service';
import { AboutComponent } from './about/about.component';
import { FollowComponent } from './follow/follow.component';
import { CarouselComponent } from './carousel/carousel.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

library.add( faHome );

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ContactComponent,
    ServicesComponent,
    FooterComponent,
    AboutComponent,
    FollowComponent,
    CarouselComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  entryComponents: [CarouselComponent],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const carousel = createCustomElement(CarouselComponent, { injector });
  }
  ngDoBootstrap() {}
 }
