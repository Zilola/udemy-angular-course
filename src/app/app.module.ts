import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlert } from './success/success-alert.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    SuccessAlert,
    WarningAlertComponent
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
