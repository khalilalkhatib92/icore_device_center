import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { deviceCenterCreationDTO } from '../deviceCenter.model';

@Component({
  selector: 'app-device-center-form',
  templateUrl: './device-center-form.component.html',
  styleUrls: ['./device-center-form.component.css']
})
export class DeviceCenterFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  form!: FormGroup;

  @Input()
  model!: deviceCenterCreationDTO;

  @Output()
  onSaveChanges = new EventEmitter<deviceCenterCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', { validators: [Validators.required] }],
      address: ''
    });
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }
  saveCahnges() {
    this.onSaveChanges.emit(this.form.value);
  }

}
