import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css']
})
export class ToggleButtonComponent implements OnInit {
  on: boolean;
  @Output() toggled: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.on = !this.on;
    this.toggled.emit(this.on);
  }
}
