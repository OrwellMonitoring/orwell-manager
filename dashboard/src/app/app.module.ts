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
import { HostsComponent } from './pages/hosts/hosts.component';
import { CollectorsComponent } from './pages/collectors/collectors.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ImagesComponent,
    AddimageComponent,
    HostsComponent,
    CollectorsComponent
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
