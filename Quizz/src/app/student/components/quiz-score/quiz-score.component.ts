import { Component } from '@angular/core';
import { QuizService } from 'src/app/Services/quiz.service';
import { QuizResult } from 'src/app/quizz';

@Component({
  selector: 'app-quiz-score',
  templateUrl: './quiz-score.component.html',
  styleUrls: ['./quiz-score.component.css']
})
export class QuizScoreComponent {
  quizResult!:QuizResult
  constructor(private quizService:QuizService){}
  ngOnInit(){
    let quizResultId=this.quizService.quizResult.id
   /* this.quizService.getQuizResult(quizResultId)
    .subscribe(result=>{
      this.quizResult=result
    })*/
  }

}
