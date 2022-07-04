import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { parseWebAPIErrors } from 'src/app/utilities/utils';
import { firstLetterUpperCase } from 'src/app/validators/firstLetterUpperCase';
import { genreCreationDTO } from '../genre.module';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {
  errors: string[] = [];

  constructor(private router:Router, private formBuilder: FormBuilder, private genreService: GenresService) { }
  ngOnInit(): void {
    
  }
  
  saveChanges(genreCreationDTO: genreCreationDTO){
    //console.log(genreCreationDTO);
    this.genreService.create(genreCreationDTO).subscribe(()=>{
      this.router.navigate(['/genres']);
    }, error=> this.errors = parseWebAPIErrors(error));
  }

}
