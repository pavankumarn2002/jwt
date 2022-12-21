import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavMoviesComponent } from './fav-movies/fav-movies.component';

const routes: Routes = [{
  path:'fav-movies',
  component:FavMoviesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
