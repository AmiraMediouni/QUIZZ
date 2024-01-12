import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCoachComponent } from './components/dashboard-coach/dashboard-coach.component';
import { AddQuizzComponent } from './components/add-quizz/add-quizz.component';
import { ListQuizzComponent } from './components/list-quizz/list-quizz.component';
import { AuthGuard } from '../Guards/auth.guard';

const routes: Routes = [
  {path:'',component:DashboardCoachComponent,
  canActivate:[AuthGuard],
children:[
  {path:'addQuizz',component:AddQuizzComponent},
  {path:'listQuizz',component:ListQuizzComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachRoutingModule { }
