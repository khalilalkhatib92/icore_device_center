import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { multipleSelectorModel } from 'src/app/utilities/multiple-selector/multipleSelectorModel.model';
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

  nonSelectedGenres: multipleSelectorModel[] = [
    {key:1, value:'Computer'},
    {key:2, value:'Phone'},
    {key:3, value:'Accessories'}
  ]

  selectedGenres: multipleSelectorModel[] =[];

  nonSelectedDeviceCenter: multipleSelectorModel[] = [
    {key: 1, value: 'Ramallah'},
    {key: 2, value: 'Jeruslem'},
    {key: 3, value: 'Hebron'}
  ]

  selectedDeviceCenter: multipleSelectorModel[] = [];


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', {
        validators:[Validators.required]
      }],
      summary:'',
      inMarket: false,
      dealer: '',
      releaseDate: '',
      poster:'',
      genresIds: '',
      deviceCenterIds: ''
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
    const genresIds = this.selectedGenres.map(value => value.key);
    this.form.get('genresIds')?.setValue(genresIds);

    const deviceCenterIds = this.selectedDeviceCenter.map(value => value.key);
    this.form.get('deviceCenterIds')?.setValue(deviceCenterIds);
    this.onSaveChanges.emit(this.form.value);
  }

}
