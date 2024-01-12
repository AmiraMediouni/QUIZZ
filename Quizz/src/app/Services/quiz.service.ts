import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question, QuizResult, Quizz } from '../quizz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzUrl : string =  'http://localhost:3000/quizz/' 

  questionUrl : string =  'http://localhost:3000/questions/' 
  quizResultUrl : string =  'http://localhost:3000/quizResults/' 

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
  quizResult:QuizResult={
    quizId: 0,
    id: 0,
    score: 0,
    percentage: 0,
    correct: 0,
    inCorrect: 0,
    unAttempt: 0,
    response: []
  }

  constructor(private http:HttpClient) { }
  getQuizz():Observable<Quizz[]>{
    return this.http.get<Quizz[]>(this.quizzUrl)
                 
  }
  deleteQuizz (quizz: Quizz | number): Observable<Quizz[]>{ 
    const id = typeof quizz === 'number' ? quizz : quizz.id; 
    const url=this.quizzUrl+'/'+id; 
    return this.http.delete<Quizz[]>(url);
  }
  
  addQuizz (quizz: Quizz): Observable<Quizz[]> {
     return this.http.post<Quizz[]>(this.quizzUrl, quizz, this.httpOptions);
    }

  updateQuizz(quizz: Quizz | number): Observable<Quizz[]>{
    const id = typeof quizz === 'number' ? quizz : quizz.id;
    const url=this.quizzUrl+'/'+id
    return this.http.put<Quizz[]>(url,quizz)

  }
  getQuestion():Observable<Question[]>{
    return this.http.get<Question[]>(this.questionUrl)
                 
  }
  updateQuizResult(id:number,result:QuizResult){
    return this.http.put<any>(this.quizResultUrl+id,result)

  }
  joinQuiz(quizResult:QuizResult){
    return this.http.post<QuizResult[]>(this.quizResultUrl,quizResult)

  }
  getQuizResult(id:number){
    return this.http.get<QuizResult[]>(this.quizResultUrl+id)

  }
  
}


