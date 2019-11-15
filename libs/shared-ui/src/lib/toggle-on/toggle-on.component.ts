import { Component, OnInit } from '@angular/core';
import { ToggleComponent } from '../toggle/toggle.component';

@Component({
  selector: 'toggle-on',
  templateUrl: './toggle-on.component.html',
  styleUrls: ['./toggle-on.component.css']
})
export class ToggleOnComponent implements OnInit {
  constructor(public toggle: ToggleComponent) {}

  ngOnInit() {}
}
