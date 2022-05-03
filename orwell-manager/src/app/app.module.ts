import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ImagelistComponent } from './imagelist/imagelist.component';
import { ImageaddComponent } from './imageadd/imageadd.component';
import { RouterModule, Routes } from '@angular/router';
import { ImageService } from './image.service';


const routes: Routes = [
  { path: 'images', component: ImagelistComponent },
  { path: 'images/new', component: ImageaddComponent},
  { path: 'images/new/:name', component: ImageaddComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ImagelistComponent,
    ImageaddComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
