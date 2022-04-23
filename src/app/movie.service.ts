import { Injectable } from '@angular/core';
// now no need for (of) because http returns an Observable
import { throwError as observableThrowError, Observable, of, pipe } from "rxjs";
import { catchError } from "rxjs/operators";

import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Movie } from "./Movie";


    // importing catch operator
    // And no need for the mock-movie instead we have db.json
    // import { MOVIE } from "./mock-movie";
const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = "http://localhost:5000/movies";
    // to use http client we declared as independency
    // in the constructor then use http get
    // request to fetch data
  constructor(private http:HttpClient) { }

  getMovies(): Observable<Movie[]> {
    // const movies = of(MOVIE);
    // return movies;
    // this <Movie[]> is called type of Observable an 
    // array of movies basically it cast the 
    // Observable into movie array
    return this.http.get<Movie[]>(this.apiUrl).pipe(
    // takes an arrgument errorHandler
                    catchError(this.errorHandler));
  }
    // I used HttpErrorResponse just to catch any reponse errors
  errorHandler(err:HttpErrorResponse) {
      return observableThrowError(err.message || "Server Error");
  }
 
  deleteMovie(movie:Movie): Observable<Movie> {
    // this a placeholder for the site name and which 
    // ever the is that will be deleted
    const url = `${this.apiUrl}/${movie.id}`;
    return this.http.delete<Movie>(url)
  }

    // the reason for using the HttpHeaders is that I want it to update 
    // anything I do, up to the server so that when reloading it would 
    // still there.
  updateMovieFeature(movie:Movie): Observable<Movie> {
    const url = `${this.apiUrl}/${movie.id}`;
    // used PUT beacuse it for update then,
    // I want HttpHeaders to handle the request
    return this.http.put<Movie>(url, movie, httpOptions)
  }
 }



    // what actually the Observable do? 
    // - is s Data monitoring in automatic way
    //   without the need to reload to return to the page again
    // - And the time in the Observable is followed by Events   
    //   for example: Click or Http Request
    // - To use Observable we need to Subscribe to it, 
    // - What is Subscribe? just like when you subscribe to a youtube channel 
    //   to be able to follow the channel, it is the same concept.

    // Functions of Observable which I didn't use yet 
    //  - next() => is for showing data.
    //  - Error() => to display any errors.
    //  - Complete() => is the same concept as the switch case, 
    //    and "default" in switch case is the Complete() in Observable.