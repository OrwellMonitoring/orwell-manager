import { ImagesComponent } from './pages/images/images.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostsComponent } from './pages/hosts/hosts.component';

const routes: Routes = [
  { path: 'images', component: ImagesComponent },
  { path: 'hosts', component: HostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
