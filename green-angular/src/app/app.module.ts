import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list'; 
import {MatRadioModule} from '@angular/material/radio';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Main_formComponent } from './views/main_form/main_form.component';
import { MainFormModule } from './views/main_form/main_form.module';
import { HttpClientModule } from '@angular/common/http';
import { Main_tableComponent } from './views/main_table/main_table.component';
import { MainTableModule } from './views/main_table/main-table.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { HeadeBarComponent } from './views/heade-bar/heade-bar.component';
import { HeaderBarModule } from './views/heade-bar/header-bar.module';

@NgModule({
  declarations: [		
    AppComponent,
      Main_formComponent 
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule, 
    MatRadioModule,
    MatFileUploadModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MainFormModule,
    HttpClientModule,
    MainTableModule,
    HeaderBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
