import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { deviceCenterCreationDTO } from '../deviceCenter.model';

@Component({
  selector: 'app-edit-device-center',
  templateUrl: './edit-device-center.component.html',
  styleUrls: ['./edit-device-center.component.css']
})
export class EditDeviceCenterComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  model: deviceCenterCreationDTO = {
    name: 'i House',
    address: 'Ramallah'
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      
    });
  }

  saveChange(deviceCenter: deviceCenterCreationDTO){
    console.log(deviceCenter);
  }

}
