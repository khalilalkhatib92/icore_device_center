import { Component, OnInit } from '@angular/core';
import { deviceCreationDTO } from '../devices.module';

@Component({
  selector: 'app-create-device',
  templateUrl: './create-device.component.html',
  styleUrls: ['./create-device.component.css']
})
export class CreateDeviceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSaveChanges(deviceCreationDTO: deviceCreationDTO){
    console.log(deviceCreationDTO);
  }

}
