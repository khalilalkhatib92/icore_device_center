import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.css']
})
export class DevicesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // Input: to make this component Reusable in any other component for many time
  @Input()
  devices: any;

}
