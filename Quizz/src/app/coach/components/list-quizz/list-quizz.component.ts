import { Component } from '@angular/core';
import { QuizService } from 'src/app/Services/quiz.service';

@Component({
  selector: 'app-list-quizz',
  templateUrl: './list-quizz.component.html',
  styleUrls: ['./list-quizz.component.css']
})
export class ListQuizzComponent {
  public quizz:any=[]
  updt=false
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
        deleteQuiz(qui:any){
          this.quizzService.deleteQuizz(qui)
          .subscribe(()=>{
            this.quizz=this.quizz.filter
            ((quiz: { id: any; })=>quiz.id!=qui.id)

          })
        }
        editQuiz(quiz:any){
          this.new_quizz=quiz
          this.updt=true

        }
        updateQuiz(){
          this.quizzService.updateQuizz(this.new_quizz)
          .subscribe(data=>{
           this.updt=false
          })
          this.updt=false
        }
        cancel(){
          this.updt=false
        }


}

