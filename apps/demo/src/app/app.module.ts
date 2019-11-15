import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedUiModule } from '@c1-component-design/shared-ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedUiModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
