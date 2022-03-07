import { Component, OnInit } from '@angular/core';
import { deviceCenterCreationDTO } from '../deviceCenter.model';

@Component({
  selector: 'app-create-device-center',
  templateUrl: './create-device-center.component.html',
  styleUrls: ['./create-device-center.component.css']
})
export class CreateDeviceCenterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  saveChanges(deviceCenter: deviceCenterCreationDTO){
    console.log(deviceCenter);
  }

}
