import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from '../Movie';
// import { MovieService } from '../movie.service';
@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  @Output() onAddMovie: EventEmitter<Movie> = new EventEmitter();
  // when working the froms we need to add a proerty for each field
  Title!: string;
  Type!: string;
  Poster!: string;
  Year!: number;
  imdbID!: number;
  checked: boolean = false;

  constructor() {

  }

  ngOnInit(): void {

  }


  // toggle(checked: boolean) {
  //   this.checked = checked;
  // }

  onSubmit() {
    if (!this.Title) {
      alert('add Movie please!');
      return;
    }

    const newMovie: any = {
      Title: this.Title,
      Type: this.Type,
      Poster: this.Poster,
      Year: this.Year,
      imdbID: this.imdbID,
      // checked: this.checked
    }

    this.onAddMovie.emit(newMovie);

    
  }
}
