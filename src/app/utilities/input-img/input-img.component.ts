import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { toBase64 } from '../utils';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent implements OnInit {

  constructor() { }
  image64!: string;
  @Input()
  urlCurrentImage!: string;
  @Output()
  onSaveImage = new EventEmitter<File>();

  ngOnInit(): void {
  }

  change(event:any): void{
    if(event.target.files.length > 0){
      const file: File = event.target.files[0];
      toBase64(file).then(
        (value: string | any) => this.image64 = value
      );
      this.onSaveImage.emit(file);
    }

  }

}
