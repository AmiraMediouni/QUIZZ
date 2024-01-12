import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/Services/quiz.service';
import { Question, QuizResult, Quizz } from 'src/app/quizz';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent {
  constructor (private route:ActivatedRoute,private router:Router,private quizService:QuizService){}
  questions:Question[]=[]
  quiz!:Quizz[]
  quizInfo!:Quizz
  quizResult!:QuizResult
  currentQuestionNB:number=0
  public QuizId:any
  lastQuestion=false
  firstQuestion=true

  ngOnInit(){
    this.quizResult=this.quizService.quizResult
    this.quizService.getQuestion()
    .subscribe(
      data =>{ this.questions=data
      }
      )
      console.log(this.questions)

      console.log(this.quizResult)
     // let quizId=this.quizResult.quizId
     let id=parseInt((this.route.snapshot.paramMap.get('id')!))
    this.QuizId=id
    console.log(this.QuizId)

    this.quizService.getQuizz()
    .subscribe(
      data =>{ this.quiz=data
      this.quizInfo=data[this.QuizId-1] 
      }
      )
        console.log(this.quizInfo)
     
    }
    get currentQuestion(){
      let questionId=this.quizInfo.questions[this.currentQuestionNB]
      return this.questions.find(x=>x.id==questionId)
    }
    currentSelectedOptionId:string=''
    previous(){
      this.lastQuestion=false
      this.currentQuestionNB--
      if(this.currentQuestionNB==0 ){
        this.firstQuestion=true
      }
      
    }

    next(){
      this.quizResult.response?.push(
        {
          questionId:this.currentQuestion!.id,
          answerOptionId:this.currentSelectedOptionId
        }
      )
      this.currentQuestionNB++
      this.currentSelectedOptionId=""
      
      if(this.currentQuestionNB==this.quizInfo.questions.length-1){
        this.lastQuestion=true
      }
      if(this.currentQuestionNB>0 ){
        this.firstQuestion=false
      }
      if(this.currentQuestionNB==0 ){
        this.firstQuestion=true
      }
    }
    submit(){
      this.next()
      this.router.navigate(['student/quizScore'])
      this.quizService.updateQuizResult(this.quizResult.id,this.quizResult)
      this.calculateResult()
    }
    calculateResult(){
       let score= 0;
       let percentage= 0;
       let correct= 0;
       let inCorrect= 0;
       let unAttempt= 0;
       let totalMark= 0;
       this.quizResult.response.forEach((response)=>{
        let questionId=response.questionId;
        let selectedOptionId=response.answerOptionId
        let question=this.questions.find(x=>x.id==questionId)
        let correctOption=question?.options.find(x=>x.isCorrect==true)
        totalMark+=question!.marks
        if(!selectedOptionId){
          unAttempt++
        }else if(selectedOptionId==correctOption?.id){
          correct++
          score+=question!.marks
        }else{
          inCorrect++
          score-=question!.negativeMarks
        }

       }
       )
       percentage=Math.round((score/totalMark)*100)
        console.log(percentage);
        this.quizResult.correct=correct
        this.quizResult.inCorrect=inCorrect
        this.quizResult.unAttempt=unAttempt
        this.quizResult.score=score
        this.quizResult.percentage=percentage

console.log(this.quizResult);




    }
}
