import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-device-center',
  templateUrl: './edit-device-center.component.html',
  styleUrls: ['./edit-device-center.component.css']
})
export class EditDeviceCenterComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      
    });
  }

}
