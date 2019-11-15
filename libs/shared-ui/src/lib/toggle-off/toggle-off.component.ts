import { Component, OnInit } from '@angular/core';
import { ToggleComponent } from '../toggle/toggle.component';

@Component({
  selector: 'toggle-off',
  templateUrl: './toggle-off.component.html',
  styleUrls: ['./toggle-off.component.css']
})
export class ToggleOffComponent implements OnInit {
  constructor(public toggle: ToggleComponent) {}

  ngOnInit() {}
}
