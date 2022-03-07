import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dealerCreationDTO as dealerDTO } from '../dealers.module';

@Component({
  selector: 'app-form-dealer',
  templateUrl: './form-dealer.component.html',
  styleUrls: ['./form-dealer.component.css']
})
export class FormDealerComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  form!: FormGroup;

  @Input()
  model!: dealerDTO;
  //model!: dealerCreationDTO; // this model of type (dealerCreationDTO) will not be used here because 
  //we in edit-dealer mode that will recive a url value of picture as (string), in order that we using (dealerDTO) interface for simplsity.

  @Output()
  onSaveChanges = new EventEmitter<dealerDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', { validators: [Validators.required] }],
      dateOfBirth: '',
      picture: '',
      biography:''
    })
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  onImageSelected(image: any) {
    this.form.get('picture')?.setValue(image);
  }

  saveChanges() {
    this.onSaveChanges.emit(this.form.value);
  }

  changeMarkdown(content: any){
    this.form.get('biography')?.setValue(content);
  }

}
