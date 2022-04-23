import { Component, OnInit } from '@angular/core';
// import { ApiService } from "../api.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
      :host nb-layout-header {
        display: flex;
        background-color: black;
        color: white;
      }
      h1 {
        margin: 5 auto;
        padding-left: 15px;
        font-family: "Poppins", sans-serif;
      }
      nb-layout-column {
        display: grid;
        grid-template-rows: 15px 20px auto;
        margin-left: 50px;
      }
    
  `]
})
export class HeaderComponent implements OnInit {
  title: string = 'Tracking-app';

  toggleAddTask() {
    console.log('toggle')
  }


  ngOnInit(): void {

  }
}
