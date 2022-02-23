import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDealersComponent } from './dealers/create-dealers/create-dealers.component';
import { IndexDealersComponent } from './dealers/index-dealers/index-dealers.component';
import { CreateDeviceCenterComponent } from './device-center/create-device-center/create-device-center.component';
import { IndexDeviceCenterComponent } from './device-center/index-device-center/index-device-center.component';
import { CreateDeviceComponent } from './devices/create-device/create-device.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { HomeComponent } from './home/home.component';

// To define all routes for all component we need to navigat
const routes: Routes = [
  {path:'', component:HomeComponent},

  {path: 'genres', component:IndexGenresComponent},
  {path:'genres/create', component:CreateGenreComponent},

  {path: 'dealers', component:IndexDealersComponent},
  {path:'dealer/create', component:CreateDealersComponent},

  {path: 'devicecenter', component:IndexDeviceCenterComponent},
  {path:'devicecenter/create', component:CreateDeviceCenterComponent},

  {path:'devices/create', component:CreateDeviceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
