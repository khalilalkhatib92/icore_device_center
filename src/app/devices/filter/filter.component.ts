import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  form!: FormGroup;
  genres = [{id: 0, name: 'Computer'},{id: 1, name:'Mobile'}];

  devicesArr = [
    {category:'hp', poster:'https://mrlaptop.pk/wp-content/uploads/2021/01/HP-Pavilion-Laptop-%E2%80%93-15t-eg000.jpg'},
    {category:'Dell', poster:'https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/xps_notebooks/13_9370/global_spi/notebook-xps-13-9370-campaign-hero-504x350-ng.psd?fmt=jpg'},
    {category:'Apple MacBook', poster:'https://5.imimg.com/data5/BM/JB/PA/SELLER-8416002/refurbished-apple-macbook-pro-a1502-retina-500x500.jpg'},
  ];

  originalDevices = this.devicesArr;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      category:'',
      genreId: 0,
      currentDevices:false,
      upComingDevices:false
    });
// Subscribe: means, any value changes on form, will reflect on page/ result. as we can see in consol log, and
// those values is the values of form.
    this.form.valueChanges
    .subscribe(values =>{
      //console.log(values);
      this.devicesArr = this.originalDevices;
      this.filterDevices(values);
    });
  }

  filterDevices(values: any){
    if(values.category){
      this.devicesArr = this.devicesArr.filter(devices => devices.category.indexOf(values.category) !== -1);
    }
  }

  clearForm(){
    this.form.reset();
  }

}
