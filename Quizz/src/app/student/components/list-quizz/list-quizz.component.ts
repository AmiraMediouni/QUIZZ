import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/Services/quiz.service';

@Component({
  selector: 'app-list-quizz',
  templateUrl: './list-quizz.component.html',
  styleUrls: ['./list-quizz.component.css']
})
export class ListQuizzComponent {

  public quizz:any=[]
  searchTerm = "";
  filteredQuizz=[]
  new_quizz:any={
    id:'',
    name:'',
    subject:'',
    nbQuestion:''

  }
  
  constructor( private quizzService:QuizService, private router:Router){}
  
  ngOnInit(): void {
      this.quizzService.getQuizz()
        .subscribe(data => this.quizz=data)


        }
        startQuiz(quiz:any){
            this.router.navigate(['student/passQuizz',quiz.id])
                 
        }
       
       


}

