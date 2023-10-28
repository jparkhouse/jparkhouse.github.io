import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HandComponentComponent } from './hand-component/hand-component.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { HintComponentComponent } from './hint-component/hint-component.component';
import { ActionButtonComponentComponent } from './action-button-component/action-button-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HandComponentComponent,
    CardComponentComponent,
    HintComponentComponent,
    ActionButtonComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
