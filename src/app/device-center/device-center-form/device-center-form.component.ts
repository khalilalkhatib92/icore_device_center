import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { coordinatesMap } from 'src/app/utilities/map/coordinate';
import { deviceCenterCreationDTO, deviceCenterDTO } from '../deviceCenter.model';

@Component({
  selector: 'app-device-center-form',
  templateUrl: './device-center-form.component.html',
  styleUrls: ['./device-center-form.component.css']
})
export class DeviceCenterFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  form!: FormGroup;

  @Input()
  model!: deviceCenterDTO;

  @Output()
  onSaveChanges = new EventEmitter<deviceCenterCreationDTO>();

  initialCoordinates: coordinatesMap[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', { validators: [Validators.required] }],
      address: '',
      latitude: ['', { validators: [Validators.required] }],
      longitude: ['', { validators: [Validators.required] }],
    });
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
      this.initialCoordinates.push({latitude: this.model.latitude, longitude: this.model.longitude});
    }

  }
  saveCahnges() {
    this.onSaveChanges.emit(this.form.value);
  }

  onSelectedLocation(coordinates: coordinatesMap){
    this.form.patchValue(coordinates);
  }

}
