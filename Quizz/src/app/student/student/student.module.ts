import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardStudentComponent } from '../components/dashboard-student/dashboard-student.component';
import { PassQuizzComponent } from '../components/pass-quizz/pass-quizz.component';
import { ListQuizzComponent } from '../components/list-quizz/list-quizz.component';
import { StudentRoutingModule } from './student-routing.module';
import { NavbarStudentComponent } from '../components/navbar-student/navbar-student.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/filter.pipe';


@NgModule({
  declarations: [DashboardStudentComponent,
  PassQuizzComponent,
  ListQuizzComponent,
  NavbarStudentComponent,
  FilterPipe
],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule  ]
})
export class StudentModule { }
