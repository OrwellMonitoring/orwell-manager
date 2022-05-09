import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { SidenavComponent } from './components/sidenav/sidenav.component'
import { ImagesComponent } from './pages/images/images.component';
import { RouterModule } from '@angular/router';
import { ImageService } from './services/image.service';
import { AddimageComponent } from './components/addimage/addimage.component';


const appRoutes = [
  { path: 'images', component: ImagesComponent}
]

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
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
