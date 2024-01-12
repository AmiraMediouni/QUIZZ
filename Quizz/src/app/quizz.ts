export class Quizz {
    id:number=0;
    name:string='';
    subject:string='';
    nbQuestion:number=0;
    questions:number[]=[]
    /*constructor(id:number,name:string,subject:string,nbQuestion:number){
        this.id=id
        this.name=name
        this.subject=subject
        this.nbQuestion=nbQuestion
        

    }*/
}
export class Question {
    id:number=0;
    content:string='';
    marks:number=0;
    negativeMarks:number=0;
    options:Option[]=[]

    
}
export class Option {
    id:string='';
    content:string='';
    isCorrect:boolean=false;
}

export class QuizResult {
    id:number=0;
    quizId:number=0;
    score:number=0;
    percentage:number=0;
    correct:number=0;
    inCorrect:number=0;
    unAttempt:number=0;
    response:{questionId:number,answerOptionId:string}[]=[]

    
}