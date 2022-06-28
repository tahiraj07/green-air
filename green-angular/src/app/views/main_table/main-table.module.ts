import { NgModule } from '@angular/core'; 
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
import { MatTableModule } from '@angular/material/table';
import { HeaderBarModule } from '../heade-bar/header-bar.module';
import { Main_tableComponent } from './main_table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableExporterModule } from 'mat-table-exporter';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { Form_detailsComponent } from './form_details/form_details.component';
import { MatDialogModule } from '@angular/material/dialog'; 
import { SideNavModule } from '../shared/side-nav/side-nav.module';
import { MatSelectModule } from '@angular/material/select';

@NgModule({ 
  declarations: [Main_tableComponent,
                 Form_detailsComponent],
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
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    HeaderBarModule,
    MatTableExporterModule,
    MatIconModule,
    MatSortModule,
    MatDialogModule,
    SideNavModule,
    MatSelectModule
  ],
  exports: [Main_tableComponent]
})
export class MainTableModule { }
