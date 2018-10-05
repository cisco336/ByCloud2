import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

import { ContentService } from './content.service';

library.add( faHome );

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ContactComponent,
    ServicesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
