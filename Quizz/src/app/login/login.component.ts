import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm=new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  })
  signupUsers:any[]=[]
  loginObj:any={
    email:'',
    password:''
  }
  constructor(private auth:AuthService,private router:Router){}
  ngOnInit(){
    const localData=localStorage.getItem("signupUser")
    if(localData!=null){
      this.signupUsers=JSON.parse(localData)
    }
      }
  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);

     /* this.auth.login(this.loginForm.value)
      .subscribe(
        (result)=>{
          this.router.navigate(['coach']);
        },
        (err:Error)=>{
          alert(err.message)
        }
      )*/
      const exist=this.signupUsers.find(m=>m.email===this.loginObj.email)

      if (exist!=undefined){
        alert("Welcome " + exist.userName)      
        this.auth.login(this.loginForm.value)        
      .subscribe(
        (result)=>{
          if (this.auth.getUser()=="student"){this.router.navigate(['student']);}
          else{this.router.navigate(['coach']);}
          
        }
      )
        this.loginObj={
          email:'',
          password:''
        }
       
      }
      else {
        alert('error')
      }
    }
    
       
  }

}
