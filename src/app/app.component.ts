import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.ComputerDevices = [
      {
        category: "Hp",
        releasDate: new Date(),
        price: 1700.99
      },
      {
        category: "Mac Appel",
        releasDate: new Date(),
        price: 2000.99
      }
    ];
    this.PhoneDevices = [
      {
        category: "Galaxy S10",
        releasDate: new Date(),
        price: 1050.99
      },
      {
        category: "IPhone 13 Pro",
        releasDate: new Date(),
        price: 1200.99
      }
    ]
    
  }
  ComputerDevices: any;
  PhoneDevices: any;
  title = 'component-angular';
}
