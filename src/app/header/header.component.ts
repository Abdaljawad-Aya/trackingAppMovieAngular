import { Component, OnInit } from '@angular/core';
// import { ApiService } from "../api.service";
import { UiService } from "../ui.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'Tracking App';

  toggleAddTask() {
    console.log('toggle')
  }
  ngOnInit(): void {
     
  }
}
