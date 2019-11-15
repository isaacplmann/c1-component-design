import {
  Component,
  OnInit,
  Input,
  Output,
  ContentChildren,
  ContentChild,
  AfterContentInit
} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ToggleButtonComponent } from '../toggle-button/toggle-button.component';
import { ToggleOnComponent } from '../toggle-on/toggle-on.component';
import { ToggleOffComponent } from '../toggle-off/toggle-off.component';

@Component({
  selector: 'toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit, AfterContentInit {
  @Input() on: boolean;
  @Output() toggled: EventEmitter<boolean> = new EventEmitter();

  @ContentChild(ToggleButtonComponent, { static: true })
  button: ToggleButtonComponent;

  @ContentChild(ToggleOnComponent, { static: true })
  toggleOn: ToggleOnComponent;

  @ContentChild(ToggleOffComponent, { static: true })
  toggleOff: ToggleOffComponent;

  constructor() {
    console.log('constructor', this.button);
  }

  ngOnInit() {}

  ngAfterContentInit() {
    if (this.button) {
      this.button.toggled.subscribe(newOnValue => {
        this.on = newOnValue;
        this.toggleOn.on = this.on;
        this.toggleOff.on = this.on;
      });
    }
  }
}
