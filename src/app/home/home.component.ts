import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    setTimeout(()=> {
      //this.ComputerDevices;
      this.ComputerDevices = [
        {
          category: "Hp",
          releasDate: new Date(),
          price: 1700.99,
          poster:'https://m.xcite.com/media/catalog/product/cache/1/thumbnail/550x400/9df78eab33525d08d6e5fb8d27136e95/h/p/hp_pavilion_15_silver_2_600_485_1.jpg'
        },
        {
          category: "Mac Appel",
          releasDate: new Date(),
          price: 2000.99,
          poster:'https://5.imimg.com/data5/BM/JB/PA/SELLER-8416002/refurbished-apple-macbook-pro-a1502-retina-500x500.jpg'
        }
      ];
      this.PhoneDevices = [
        {
          category: "Galaxy S22 Ultra",
          releasDate: new Date(),
          price: 1050.99,
          poster:'https://images.samsung.com/levant_ar/smartphones/galaxy-s22-ultra/buy/S22_Ultra_ProductKV_Burgundy_MO.jpg'
        },
        {
          category: "IPhone 13 Pro Max",
          releasDate: new Date(),
          price: 1200.99,
          poster:'https://ihouse.fra1.digitaloceanspaces.com/images/ViskIXGAmmkMxIw0ogCktph8K9qPryiei5cYpFlG.png'
        },
        {
          category: "Tecno Pova neo",
          releasDate: new Date(),
          price: 800.99,
          //poster: '//src//assets//images//Phones//Tecno_Pova_neo.jpg'
          poster:'https://www.rayashopng.com/images/thumbs/0000698_tecno-pova-neo-644-black_600.jpeg'
        }
      ]
    }, 0);
  }
  ComputerDevices:any;
  PhoneDevices: any;

}
