import { Component } from '@angular/core';
import { QuizService } from 'src/app/Services/quiz.service';

@Component({
  selector: 'app-add-quizz',
  templateUrl: './add-quizz.component.html',
  styleUrls: ['./add-quizz.component.css']
})
export class AddQuizzComponent {

  public quizz:any=[]
  new_quizz:any={
    id:'',
    name:'',
    subject:'',
    nbQuestion:''

  }
  
  constructor( private quizzService:QuizService){}
  
  ngOnInit(): void {
      this.quizzService.getQuizz()
        .subscribe(data => this.quizz=data)


        }
        addQuiz(){
          this.quizzService.addQuizz(this.new_quizz)
          .subscribe((quiz)=>{
            this.quizz=[quiz, ...this.quizz]
          })
        }       


}


