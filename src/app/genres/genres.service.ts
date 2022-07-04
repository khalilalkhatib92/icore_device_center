import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { genreCreationDTO, genreDTO } from './genre.module';

@Injectable({
  providedIn: 'root' //here we use a singltone method in order to use this instance of service/class in all project.
})
export class GenresService {
  
  constructor(private http : HttpClient) { } 

  private apiURL = environment.apiUrl + '/genres';

  getAll(): Observable<genreDTO[]> {
    return this.http.get<genreDTO[]>(this.apiURL);
  }
  create(genre: genreCreationDTO){
    return this.http.post(this.apiURL, genre);
  }
}
