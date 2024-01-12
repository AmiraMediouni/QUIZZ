import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any):any {
    if(!value) {return null}
    if (!args){return value}
    args=args.toLowerCase()
    return value.filter(function(quiz:any){
      return JSON.stringify(quiz).toLowerCase().includes(args)
    })
  }
    /*if (!value){return value}  
const quizz=[]
for(const quiz of value){
  if(quiz['name']===searchTerm){
    quizz.push(quiz)
  }
}
return quizz

}*/

}
