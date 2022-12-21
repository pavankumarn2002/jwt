import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { LoginModel } from '../login-model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService) { }
  loginForm: LoginModel = {
    username: "",
    password: ""
  }
  ngOnInit(): void {
  }
  userLogin() {
    this.authService.userLogin(this.loginForm).subscribe((data)=>{
      if(data){
        alert('success')
        const loc=localStorage.getItem("tokens")
        console.log(loc)
      }else{
          alert('failed')
      }
    })
   }
}
