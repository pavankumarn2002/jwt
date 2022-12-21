import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: "", component: HomeComponent
},
{
  path:"auth",loadChildren:()=>import("./auth/auth.module").then(m=>m.AuthModule)
},
{
path:"movies",loadChildren:()=>import("./movies/movies.module").then(m=>m.MoviesModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
