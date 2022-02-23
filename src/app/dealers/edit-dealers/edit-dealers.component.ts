import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-dealers',
  templateUrl: './edit-dealers.component.html',
  styleUrls: ['./edit-dealers.component.css']
})
export class EditDealersComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      alert(params.id)
    });
  }

}
