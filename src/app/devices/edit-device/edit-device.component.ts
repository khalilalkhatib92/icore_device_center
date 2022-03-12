import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { deviceCreationDTO, deviceDTO } from '../devices.module';

@Component({
  selector: 'app-edit-device',
  templateUrl: './edit-device.component.html',
  styleUrls: ['./edit-device.component.css']
})
export class EditDeviceComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: deviceDTO = {
    title: 'HP',
    summary: 'New Look',
    inMarket: true,
    dealer: 'iCore',
    releaseDate: new Date(),
    poster: 'https://www.hp.com/us-en/shop/app/assets/images/product/31F21AV_1/center_facing.png?_=1637748976630'
  };
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      
    });
  }

  onSaveChanges(deviceCreationDTO : deviceCreationDTO){
  console.log(deviceCreationDTO);
  }

}
