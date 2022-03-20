import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { multipleSelectorModel } from 'src/app/utilities/multiple-selector/multipleSelectorModel.model';
import { dealerCreationDTO } from '../dealers.module';

@Component({
  selector: 'app-dealers-autocomplete',
  templateUrl: './dealers-autocomplete.component.html',
  styleUrls: ['./dealers-autocomplete.component.css']
})
export class DealersAutocompleteComponent implements OnInit {

  constructor() { }

  control: FormControl = new FormControl();

  dealers = [
    {name: 'iCore Company', picture:'https://logodix.com/logo/1681079.jpg'},
    {name: 'iCore Dealer', picture:'https://icorepioneer.com/images/logo-dark.png'},
      {name: 'iHouse', picture:'https://media-exp1.licdn.com/dms/image/C560BAQF8J9dt05-4KA/company-logo_200_200/0/1585206472620?e=2159024400&v=beta&t=zGKzM1oVNNluCV9xqyxl08faTaezRzaHmoFBlz9kjy0'},
  ]
 
  selectedDealers:any = [];
  //selectedDealers: dealerCreationDTO[] = [];

  originalDealers = this.dealers;

  ngOnInit(): void {
    this.control.valueChanges.subscribe(value => {
      this.dealers = this.originalDealers;
      this.dealers = this.dealers.filter(dealer => dealer.name.indexOf(value) !== -1);
    });
  }

  optionSelected(event: MatAutocompleteSelectedEvent){
    console.log(event.option.value);
    this.selectedDealers.push(event.option.value);
    this.control.patchValue('');
  }

}
