import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLetterUpperCase } from 'src/app/validators/firstLetterUpperCase';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {

  constructor(private router:Router, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    
  }
  
  saveChanges(){
    this.router.navigate(['/genres']);
  }

}
