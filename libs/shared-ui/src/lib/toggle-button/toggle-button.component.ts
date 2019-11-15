import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToggleComponent } from '../toggle/toggle.component';

@Component({
  selector: 'toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css']
})
export class ToggleButtonComponent implements OnInit {
  constructor(public toggle: ToggleComponent) {}

  ngOnInit() {}

  onClick() {
    this.toggle.on = !this.toggle.on;
    this.toggle.other;
  }
}
