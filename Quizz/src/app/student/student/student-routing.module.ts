import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardStudentComponent } from '../components/dashboard-student/dashboard-student.component';
import { AuthGuard } from 'src/app/Guards/auth.guard';
import { PassQuizzComponent } from '../components/pass-quizz/pass-quizz.component';
import { ListQuizzComponent } from '../components/list-quizz/list-quizz.component';
import { StartQuizComponent } from '../components/start-quiz/start-quiz.component';
import { QuizScoreComponent } from '../components/quiz-score/quiz-score.component';

const routes: Routes = [
  {path:'',component:DashboardStudentComponent,
  canActivate:[AuthGuard],
children:[
  {path:'passQuizz',component:PassQuizzComponent},
  {path:'listQuizz',component:ListQuizzComponent},
  {path:'passQuizz/:id',component:PassQuizzComponent},
  {path:'startQuizz',component:StartQuizComponent},
  {path:'startQuizz/:id',component:StartQuizComponent},
  {path:'quizScore',component:QuizScoreComponent}

]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
