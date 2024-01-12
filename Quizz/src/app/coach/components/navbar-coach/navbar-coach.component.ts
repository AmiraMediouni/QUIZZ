import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar-coach',
  templateUrl: './navbar-coach.component.html',
  styleUrls: ['./navbar-coach.component.css']
})
export class NavbarCoachComponent {
  constructor(private auth:AuthService){}
  logOut(){
    this.auth.logOut()

  }

}
