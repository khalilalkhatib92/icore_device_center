import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { deviceCreationDTO, deviceDTO } from '../devices.module';

@Component({
  selector: 'app-form-device',
  templateUrl: './form-device.component.html',
  styleUrls: ['./form-device.component.css']
})
export class FormDeviceComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  form!: FormGroup

  @Input()
  model!: deviceDTO;

  @Output()
  onSaveChanges = new EventEmitter<deviceCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', {
        validators:[Validators.required]
      }],
      summary:'',
      inMarket: false,
      dealer: '',
      releaseDate: '',
      poster:''
    })
    if(this.model != undefined){
      this.form.patchValue(this.model);
    }
  }

  onImageSelected(file: File){
    this.form.get('poster')?.setValue(file);
  }

  changeMarkDown(content: string){
    this.form.get('summary')?.setValue(content);
  }
  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }

}
