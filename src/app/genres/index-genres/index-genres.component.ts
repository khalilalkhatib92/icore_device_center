import { Component, OnInit } from '@angular/core';
import { genreDTO } from '../genre.module';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-index-genres',
  templateUrl: './index-genres.component.html',
  styleUrls: ['./index-genres.component.css']
})
export class IndexGenresComponent implements OnInit {

  genres!: genreDTO[];
  columnToDisplay = ['name', 'actions'];
  constructor(private genreService: GenresService) { }

  ngOnInit(): void {
    this.loadGenres();
  }

  loadGenres(){
    this.genreService.getAll().subscribe(genres => {
      this.genres = genres;
    });
  }

  delete(id: number){
    this.genreService.delete(id).subscribe(() => {
      this.loadGenres();
    });
  }

}
