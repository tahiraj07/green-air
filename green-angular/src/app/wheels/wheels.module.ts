import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WheelsComponent } from './wheels.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { MatRadioModule } from '@angular/material/radio';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatListModule,
    MatFileUploadModule,
    MatCheckboxModule
  ],
  declarations: [WheelsComponent]
})
export class WheelsModule { }
