import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormComponent } from './form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [FormComponent]
})
export class AppModule { }
