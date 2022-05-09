import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { SidenavComponent } from './components/sidenav/sidenav.component'
import { ImagesComponent } from './pages/images/images.component';
import { ImageService } from './services/image.service';
import { AddimageComponent } from './components/addimage/addimage.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ImagesComponent,
    AddimageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
