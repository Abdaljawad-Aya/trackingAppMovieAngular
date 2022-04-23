import { Component, OnInit, Input } from '@angular/core';
import { Movie } from "../Movie";
import { MovieService } from "../movie.service";
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private movieService:MovieService) { }

// I need to use Observable because usually I'm going to deal with asynchronously data
// if I'm going to fetch from the server.

// void means this function is empty
  ngOnInit(): void {
    // this like the promise in javascript => .then and so on
    // i used subscribe because I dealing with the Observable
    this.movieService.getMovies()
        .subscribe((movies) => (this.movies = movies));
  }

  deleteMovie(movie: Movie) {
    // what this code is doing is when clicked on it will delete from the server(movie.service.ts) 
    // we defined a constant named url 

    // just passed in the deleteMovie(movie) which ever that movie is 
    // and delete it  
    this.movieService.deleteMovie(movie).subscribe(
      () => (this.movies = this.movies.filter(
        // for each movie we want where that movie.id, 
        // is not equal to the movie that we deleted, 
        // it will filter out it from the UI
       (m) => m.id !== movie.id)
       ));
  }

  toggleFeatured(movie: Movie) {
    // taking the movie that is passed in 
    // and set it to the opposite of what ever it is 
    // which means if I set a true to some movie in db.json 
    // when I double click it on the UI will be become false  
    movie.Feature = !movie.Feature;
    this.movieService.updateMovieFeature(movie).subscribe()
    // console.log(movie.Feature);
  }

}
