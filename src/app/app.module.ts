import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './shared/auth/auth.service';


export function jwtOptionsFactory(authService:AuthService){
 return {
  tokenGetter:()=>{
    return authService.getAccessToken()
  },
  allowedDomains:['localhost:3000'],
  disallowedRoutes:['http://localhost:3000/auth/login','http://localhost:3000/auth/refreshtoken']
 }
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      jwtOptionsProvider:{
        provide:JWT_OPTIONS,
        useFactory:jwtOptionsFactory,
        deps:[AuthService]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
