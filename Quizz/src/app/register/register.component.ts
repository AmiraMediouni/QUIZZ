import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../shared/password.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
 
  export class RegisterComponent {
   registerForm!:FormGroup 
     signupUsers:any[]=[]
    signupObj:any={
      userName:'',
      email:'',
      password:''
    }
    loginObj:any={
      email:'',
      password:''
    }
    get userName(){
      return this.registerForm.get('userName')
    }
    get email(){
      return this.registerForm.get('email')
    }
    constructor(private fb:FormBuilder, private router:Router){}
    ngOnInit(){
      this.registerForm=this.fb.group({
        userName : ['', [Validators.required, Validators.minLength(3)]],
        email : [''],
        password: [''],
        confirmPassword:['']
       
      },{validator:passwordValidator})
      const localData=localStorage.getItem("signupUser")
      if(localData!=null){
        this.signupUsers=JSON.parse(localData)
      }
        }
    signUp(){
      const localData=localStorage.getItem("signupUser")
      if(localData!=null){
        this.signupUsers=JSON.parse(localData)
      }
      const username=this.signupObj.userName
      
      if(this.signupUsers.some(user=>user.userName===username)){
        alert('user already exist')
        return
      }
      this.signupUsers.push(this.signupObj)
      localStorage.setItem("signupUser",JSON.stringify(this.signupUsers))
      alert("register successful, please login")
      this.signupObj={
        userName:'',
        email:'',
        password:''
      }
      this.router.navigate(['login'])
    }
  }
/*export class RegisterComponent {
  registerForm=new FormGroup({
    userName:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')
  })
  signupUsers:any[]=[]
  signupObj:any={
    userName:'',
    email:'',
    password:''
  }
  loginObj:any={
    email:'',
    password:''
  }
  constructor(){}
  ngOnInit(){
    const localData=localStorage.getItem("signupUser")
    if(localData!=null){
      this.signupUsers=JSON.parse(localData)
    }
      }
  signUp(){
    const localData=localStorage.getItem("signupUser")
    if(localData!=null){
      this.signupUsers=JSON.parse(localData)
    }
    const username=this.signupObj.userName
    
    if(this.signupUsers.some(user=>user.userName===username)){
      alert('user already exist')
      return
    }
    this.signupUsers.push(this.signupObj)
    localStorage.setItem("signupUser",JSON.stringify(this.signupUsers))
    alert("register successful, please login")
    this.signupObj={
      userName:'',
      email:'',
      password:''
    }
  }
  
  
}*/
