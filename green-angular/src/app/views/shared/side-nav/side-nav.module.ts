import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';  
import { SideNavComponent } from './side-nav.component';



@NgModule({
  declarations: [SideNavComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports: [SideNavComponent]
})
export class SideNavModule { }
