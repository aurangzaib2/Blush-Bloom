import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ExpertComponent } from './expert/expert.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AgmCoreModule } from '@agm/core';
import {FormsModule} from '@angular/forms';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component'
import { HttpClientModule }  from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    GalleryComponent,
    ExpertComponent,
    FaqComponent,
    ContactComponent,
    AppointmentComponent,
    AppointmentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
