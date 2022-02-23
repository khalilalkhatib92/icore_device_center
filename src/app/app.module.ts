import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevicesListComponent } from './devices/devices-list/devices-list.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { IndexDealersComponent } from './dealers/index-dealers/index-dealers.component';
import { CreateDealersComponent } from './dealers/create-dealers/create-dealers.component';
import { IndexDeviceCenterComponent } from './device-center/index-device-center/index-device-center.component';
import { CreateDeviceCenterComponent } from './device-center/create-device-center/create-device-center.component';
import { CreateDeviceComponent } from './devices/create-device/create-device.component';

@NgModule({
  declarations: [
    AppComponent,
    DevicesListComponent,
    GenericListComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    IndexGenresComponent,
    CreateGenreComponent,
    IndexDealersComponent,
    CreateDealersComponent,
    IndexDeviceCenterComponent,
    CreateDeviceCenterComponent,
    CreateDeviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
