import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  // this Input(metadata) is a reusable way I can use it anywhere
  @Input() text:any;
  @Input() color: any;
  // Outputting the eventemitter
  @Output() btnClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    // emitting the button click which I set it up , in the @Output.
    // in the header component in the <app-button></app-button>
    this.btnClick.emit();
  }
  

}
