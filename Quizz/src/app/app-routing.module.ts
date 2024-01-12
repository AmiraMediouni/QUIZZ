import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path:"" , component:HomeComponent },
  { path:"home" , component:HomeComponent },
  { path:"login", component:LoginComponent },
  { path:"register", component:RegisterComponent },
  { path:"coach", loadChildren:()=>import('./coach/coach.module').then((m)=>m.CoachModule) },
  { path:"student", loadChildren:()=>import('./student/student/student.module').then((m)=>m.StudentModule) },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
