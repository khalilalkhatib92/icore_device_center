import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dealerCreationDTO, dealerDTO } from '../dealers.module';

@Component({
  selector: 'app-edit-dealers',
  templateUrl: './edit-dealers.component.html',
  styleUrls: ['./edit-dealers.component.css']
})
export class EditDealersComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  model: dealerDTO = {
    name: 'Khalil',
    dateOfBirth: new Date(),
    picture: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    
  };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      //alert(params.id)
    });
  }

  saveChanges(dealerCreationDTO: dealerCreationDTO) {
    console.log(dealerCreationDTO);
  }

}
