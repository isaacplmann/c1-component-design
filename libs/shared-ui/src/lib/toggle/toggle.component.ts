import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ContentChild,
  TemplateRef
} from '@angular/core';

@Component({
  selector: 'toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {
  @Input() on: boolean;
  @Output() toggled: EventEmitter<boolean> = new EventEmitter();

  @ContentChild('toggleTemplate', { static: false, read: TemplateRef })
  template: TemplateRef<any>;

  changeOn = (newOn: boolean) => {
    console.log(this);
    this.on = newOn;
    this.toggled.emit(this.on);
  };

  constructor() {}

  ngOnInit() {}
}
