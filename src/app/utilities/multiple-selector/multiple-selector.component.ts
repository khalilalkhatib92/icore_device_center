import { Component, Input, OnInit } from '@angular/core';
import { multipleSelectorModel } from './multipleSelectorModel.model';

@Component({
  selector: 'app-multiple-selector',
  templateUrl: './multiple-selector.component.html',
  styleUrls: ['./multiple-selector.component.css']
})
export class MultipleSelectorComponent implements OnInit {

  constructor() { }

  @Input()
  SelectedItem : multipleSelectorModel[] = [];
  @Input()
  NonSelectedItem : multipleSelectorModel[] = []

  ngOnInit(): void {
  }

  select(item: multipleSelectorModel, index: number){
    this.SelectedItem.push(item);
    this.NonSelectedItem.splice(index, 1);
  }
  deselect(item: multipleSelectorModel, index: number){
    this.NonSelectedItem.push(item);
    this.SelectedItem.splice(index, 1);
  }

  selectAll(){
    this.SelectedItem.push(...this.NonSelectedItem);
    this.NonSelectedItem = [];
  }
  deSelectAll(){
    this.NonSelectedItem.push(...this.SelectedItem);
    this.SelectedItem = [];
  }

}
