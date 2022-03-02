import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dealerCreationDTO } from '../dealers.module';

@Component({
  selector: 'app-form-dealer',
  templateUrl: './form-dealer.component.html',
  styleUrls: ['./form-dealer.component.css']
})
export class FormDealerComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  form!:FormGroup;

  @Input()
  model!: dealerCreationDTO;

  @Output()
  onSaveChanges: EventEmitter<dealerCreationDTO> = new EventEmitter<dealerCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {validators: [Validators.required]}],
      dateOfBirth: '',
      picture: ''
    })
    if(this.model !==undefined){
      this.form.patchValue(this.model);
    }
  }

  onSaveImage(image: any){
    this.form.get('picture')?.setValue(image);
  }

  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }

}
