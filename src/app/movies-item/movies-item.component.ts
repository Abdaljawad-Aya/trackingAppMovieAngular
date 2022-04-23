import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from "../Movie";

import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movies-item',
  templateUrl: './movies-item.component.html',
  styles:[
    ` 
    /* host tragting element inside the component's templates
       The host element is in parent component's template
     */
      :host nb-card, section{
        box-sizing: border-box;
        background: black;
        color: rgba(128, 255, 0, 0.901);
        margin: 8px;
        padding: 5px 5px;
        cursor: pointer;
      }
      .movie.Feature {
        border-left: 6px solid white;
      }

      h3 {
        display: flex;
        align-items:center;
        justify-content: space-between;
      }
    `
  ]
})
export class MoviesItemComponent implements OnInit {
  // from what i understand is Typescript 2.7 an above 
  // includes a strict class checking where all the 
  // properties should be initialized in the constructor.
  // A workaround is to add the ! as postfix to the variable name
  @Input() movie!: Movie;

  // since there is onDeleteMovie() I will go to the parent component
  // beacuse there we have the child component  
  @Output() onDeleteMovie: EventEmitter<Movie> = new 
  EventEmitter();
  // onToggle for the movies item component
  @Output() onToggleFeatured: EventEmitter<Movie> = new 
  EventEmitter();

  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {}
 
  // onDelete(movie:any) {
  //   console.log(movie);
  // }
  onDelete(movie:any) {
    this.onDeleteMovie.emit(movie);
  }
  // defined onToggle over here
  onToggle(movie:any) {
    this.onToggleFeatured.emit(movie);
  }
}
