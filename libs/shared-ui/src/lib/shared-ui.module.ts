import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchComponent } from './switch/switch.component';
import { ToggleComponent } from './toggle/toggle.component';
import { ToggleOnComponent } from './toggle-on/toggle-on.component';
import { ToggleOffComponent } from './toggle-off/toggle-off.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SwitchComponent,
    ToggleComponent,
    ToggleOnComponent,
    ToggleOffComponent,
    ToggleButtonComponent
  ],
  exports: [
    ToggleComponent,
    ToggleOnComponent,
    ToggleOffComponent,
    ToggleButtonComponent
  ]
})
export class SharedUiModule {}
