import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu'; 
import { HeadeBarComponent } from './heade-bar.component';



@NgModule({
  declarations: [HeadeBarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports: [HeadeBarComponent]
})
export class HeaderBarModule { }
