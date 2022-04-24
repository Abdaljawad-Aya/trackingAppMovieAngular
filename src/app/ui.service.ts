import { Injectable } from '@angular/core';

// import Observable an subject
// rxjs (Reactive Extension for Javascript) 
// is used to implement reactive programming to deal with 
// async implemenation, callback, event-based programs
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UiService {
  // which its goning to represent if its showing or not
  private showAddMovie: boolean = false;
  // 
  private subject = new Subject<any>();
  constructor() { }

  // a function to toggle this value => showAddMovie
  toggleAddMovie() : void { // this is not going to return anything
    // the value that been added above which is false by default
    // !this.showAddMovie will set to what ever the opposite
    this.showAddMovie = !this.showAddMovie;
    // next() will pass the value what ever the current showAddMovie value is
    this.subject.next(this.showAddMovie);
  }

  // basically it fire off when we toggle 
  onToggle(): Observable<any> {
    // again Observable is to preform 
    // asynchronous operations and handle asynchronous data
    return this.subject.asObservable();
  }
}
