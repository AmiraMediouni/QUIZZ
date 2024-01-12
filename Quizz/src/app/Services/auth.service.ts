import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router,private http: HttpClient) { }
  setUser(user:any){
    localStorage.setItem('user',user)
  }
  getUser(){
    return localStorage.getItem('user')
  }
  isLoggedIn(){
    return this.getUser()!==null
  }
  logOut(){
    localStorage.removeItem('user')
    this.router.navigate(['login'])
  }
  login({email, password}:any):Observable<any> {
    if(email==="amira.mediouni@hotmail.com"&&password==="1234"){
      this.setUser('coach')
      return of({name:'coach',email:'amira.mediouni@gmail.com'})
    }
    else{
      this.setUser('student')
      return of({name:'',email:''})
    }
    
}
  
}
