import { Component, OnInit } from '@angular/core';
// import { ApiService } from "../api.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'Tracking-app';

  toggleAddTask() {
    console.log('toggle')
  }
  ngOnInit(): void {

  }
}
