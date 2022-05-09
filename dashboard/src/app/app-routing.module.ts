import { ImagesComponent } from './pages/images/images.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostsComponent } from './pages/hosts/hosts.component';
import { CollectorsComponent } from './pages/collectors/collectors.component';

const routes: Routes = [
  { path: 'images', component: ImagesComponent },
  { path: 'hosts', component: HostsComponent},
  { path: 'collectors', component: CollectorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
