import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dealerCreationDTO } from '../dealers.module';

@Component({
  selector: 'app-edit-dealers',
  templateUrl: './edit-dealers.component.html',
  styleUrls: ['./edit-dealers.component.css']
})
export class EditDealersComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  model: dealerCreationDTO = {name:'Khalil', dateOfBirth: new Date()}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      //alert(params.id)
    });
  }

  saveChanges(dealerCreationDTO: dealerCreationDTO){
    console.log(dealerCreationDTO)
  }

}
