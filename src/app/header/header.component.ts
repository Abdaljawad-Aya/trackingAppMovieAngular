import { Component, OnInit } from '@angular/core';
import { UiService } from "../ui.service";

import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Tracking App';
  // this showAddMovie is for the <app-button> in the header component 
  // so when I click add it will open a window the button turns to red for closing 
  showAddMovie: boolean = false;
  subscription!: Subscription;

  // in order to use a service I have to added to the constructor
  constructor(private uiService:UiService, private router:Router) {

    this.subscription = this.uiService.onToggle()
        .subscribe((value) => (this.showAddMovie = value));
  }

  toggleAddMovie() {
    // console.log('123');
    // basically when click this we're calling 
    // toggleAddMovie from ui.service.ts
    this.uiService.toggleAddMovie();
  }

  // 
  hasRoute(route:string) {
    return this.router.url === route;
  }
  ngOnInit(): void {}
}
