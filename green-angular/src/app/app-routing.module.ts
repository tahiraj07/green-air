import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { WheelsComponent } from './wheels/wheels.component';


const routes: Routes = [
  {  
    path: 'wheel', component: WheelsComponent 
  }
];  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
