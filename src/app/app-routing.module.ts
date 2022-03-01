import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDealersComponent } from './dealers/create-dealers/create-dealers.component';
import { EditDealersComponent } from './dealers/edit-dealers/edit-dealers.component';
import { IndexDealersComponent } from './dealers/index-dealers/index-dealers.component';
import { CreateDeviceCenterComponent } from './device-center/create-device-center/create-device-center.component';
import { EditDeviceCenterComponent } from './device-center/edit-device-center/edit-device-center.component';
import { IndexDeviceCenterComponent } from './device-center/index-device-center/index-device-center.component';
import { CreateDeviceComponent } from './devices/create-device/create-device.component';
import { EditDeviceComponent } from './devices/edit-device/edit-device.component';
import { FilterComponent } from './devices/filter/filter.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { HomeComponent } from './home/home.component';

// To define all routes for all component we need to navigat
const routes: Routes = [
  {path:'', component:HomeComponent},

  {path: 'genres', component:IndexGenresComponent},
  {path:'genres/create', component:CreateGenreComponent},
  {path: 'genres/edit/:id', component:EditGenreComponent},

  {path: 'dealers', component:IndexDealersComponent},
  {path:'dealer/create', component:CreateDealersComponent},
  {path: 'dealer/edit/:id', component:EditDealersComponent},

  {path: 'devicecenter', component:IndexDeviceCenterComponent},
  {path:'devicecenter/create', component:CreateDeviceCenterComponent},
  {path: 'devicecenter/edit/:id', component:EditDeviceCenterComponent},

  {path:'devices/create', component:CreateDeviceComponent},
  {path: 'devices/edit/:id', component:EditDeviceComponent},
  {path: 'devices/filter', component:FilterComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
