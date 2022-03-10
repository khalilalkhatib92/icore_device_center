import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { deviceCenterCreationDTO, deviceCenterDTO } from '../deviceCenter.model';

@Component({
  selector: 'app-edit-device-center',
  templateUrl: './edit-device-center.component.html',
  styleUrls: ['./edit-device-center.component.css']
})
export class EditDeviceCenterComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  model: deviceCenterDTO = {
    name: 'i House',
    address: 'Ramallah',
    latitude: 31.89201974116236 ,
    longitude: 35.20319938659669
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      
    });
  }

  saveChange(deviceCenter: deviceCenterCreationDTO){
    console.log(deviceCenter);
  }

}
