import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import { ReactformComponent } from './reactform/reactform.component';


  
const routes: Routes = [ 
  { path: 'reactform', component: ReactformComponent }, 
]; 
  
@NgModule({ 
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule], 
  providers: [] 
}) 
export class AppRoutingModule { } 