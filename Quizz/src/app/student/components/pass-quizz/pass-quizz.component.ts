import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/Services/quiz.service';
import { QuizResult } from 'src/app/quizz';

@Component({
  selector: 'app-pass-quizz',
  templateUrl: './pass-quizz.component.html',
  styleUrls: ['./pass-quizz.component.css']
})

export class PassQuizzComponent {
  public QuizId:any
  public quizz:any=[]
  public quiz:any
  public bl=false
  constructor(private route:ActivatedRoute,private router:Router ,private quizService:QuizService){}
  ngOnInit(){
    let id=parseInt((this.route.snapshot.paramMap.get('id')!))
    this.QuizId=id
    if(id){this.bl=true}
    this.quizService.getQuizz()
    .subscribe(
      (data) =>{ this.quizz=data
      this.quiz=data[this.QuizId-1] 
      let quizResult:QuizResult={
        quizId: this.quiz.id,
        id: 0,
        score: 0,
        percentage: 0,
        correct: 0,
        inCorrect: 0,
        unAttempt: 0,
        response: []
      }
      this.quizService.joinQuiz(quizResult)
      .subscribe(response=>{
      //  this.quizService.quizResult=response;
        console.log(response);
        
      })
      }
      )  
  }
  start(id:any){
    this.router.navigate(['student/startQuizz',id])
  }
  change(){this.bl=false}
}
