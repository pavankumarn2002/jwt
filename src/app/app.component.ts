import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth/auth.service';
import { UserProfile } from './shared/auth/user-profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'jwt';
  userProfile?:UserProfile|null
  constructor(private authService:AuthService){

  }
  ngOnInit():void{
    this.authService.userProfile.subscribe((data)=>
    this.userProfile=data)
  }
}
