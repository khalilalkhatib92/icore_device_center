import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevicesListComponent } from './devices/devices-list/devices-list.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MarkdownModule} from'ngx-markdown'

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
import { EditDealersComponent } from './dealers/edit-dealers/edit-dealers.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { EditDeviceCenterComponent } from './device-center/edit-device-center/edit-device-center.component';
import { EditDeviceComponent } from './devices/edit-device/edit-device.component';
import { FormGenreComponent } from './genres/form-genre/form-genre.component';
import { FilterComponent } from './devices/filter/filter.component';
import { FormDealerComponent } from './dealers/form-dealer/form-dealer.component';
import { InputImgComponent } from './utilities/input-img/input-img.component';
import { InputMarkdownComponent } from './utilities/input-markdown/input-markdown.component';

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
    CreateDeviceComponent,
    EditDealersComponent,
    EditGenreComponent,
    EditDeviceCenterComponent,
    EditDeviceComponent,
    FormGenreComponent,
    FilterComponent,
    FormDealerComponent,
    InputImgComponent,
    InputMarkdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MarkdownModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
