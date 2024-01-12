import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachRoutingModule } from './coach-routing.module';
import { DashboardCoachComponent } from './components/dashboard-coach/dashboard-coach.component';
import { AddQuizzComponent } from './components/add-quizz/add-quizz.component';
import { ListQuizzComponent } from './components/list-quizz/list-quizz.component';
import { NavbarCoachComponent } from './components/navbar-coach/navbar-coach.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    DashboardCoachComponent,
    AddQuizzComponent,
    ListQuizzComponent,
    NavbarCoachComponent
    ],
  imports: [
    CommonModule,
    CoachRoutingModule,
    FormsModule
  ]
})
export class CoachModule { }
