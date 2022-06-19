import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
import { Main_formComponent } from './views/main_form/main_form.component';
import { Main_tableComponent } from './views/main_table/main_table.component';


const routes: Routes = [
  {  
    path: 'main', component: Main_formComponent,
  },
  { 
    path: 'table', component: Main_tableComponent
  }
];  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
