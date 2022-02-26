import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstLetterUpperCase } from 'src/app/validators/firstLetterUpperCase';

@Component({
  selector: 'app-form-genre',
  templateUrl: './form-genre.component.html',
  styleUrls: ['./form-genre.component.css']
})
export class FormGenreComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required, Validators.minLength(3), firstLetterUpperCase()]
      }]
    });
  }

  saveChanges(){
    //this.router.navigate(['/genres']);
  }
  getErrorMessageFieldName(){
    const field = this.form.get('name');
    if(field?.hasError('required')){
      return  'The name field is Required';
    }
    if(field?.hasError('minlength')){
      return 'The name field length must be grater than 3';
    }
    if(field?.hasError('firstLetterUpperCase')){
      return field.getError('firstLetterUpperCase').message;
    }
    return '';
  }

}
