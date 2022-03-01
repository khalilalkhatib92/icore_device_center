import { Component, OnInit } from '@angular/core';
import { dealerCreationDTO } from '../dealers.module';

@Component({
  selector: 'app-create-dealers',
  templateUrl: './create-dealers.component.html',
  styleUrls: ['./create-dealers.component.css']
})
export class CreateDealersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveChanges(dealerCreationDTO: dealerCreationDTO){
    console.log(dealerCreationDTO);
  }

}
