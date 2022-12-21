import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { LoginModel } from 'src/app/auth/login-model';
import { TokenModel } from 'src/app/auth/token-model';
import {map,catchError,of} from "rxjs"
import { off } from 'process';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserProfile } from './user-profile';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {

   }
   jwtHelper = new JwtHelperService
   userProfile= new BehaviorSubject<UserProfile|null>(null);
   getAccessToken(){
    var localStorageToken=localStorage.getItem("tokens");
    if(localStorageToken){
         var token=JSON.parse(localStorageToken) as TokenModel
         var isTokenExpried=this.jwtHelper.isTokenExpired(token.access_token)
         if(isTokenExpried){
            this.userProfile.next(null);
            return "";
         }
         var userInfo=this.jwtHelper.decodeToken(token.access_token) as UserProfile
         this.userProfile.next(userInfo)
         return token.access_token;
    }
    return "";
   }
   userLogin(userDetails:LoginModel){
     return this.http.post("http://localhost:3000/auth/login",userDetails)
     .pipe(
      map((data)=>{
        var tokens=data as TokenModel;
        localStorage.setItem("tokens",JSON.stringify(tokens))
        var userData=this.jwtHelper.decodeToken(tokens.access_token) as UserProfile;
        this.userProfile.next(userData)
        return true
      }),
      catchError((error)=>{
        console.log(error);
        return of(false)
      })
     )
   }

}
