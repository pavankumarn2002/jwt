import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FavMovies } from './fav-movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getFavMovies(){
    return this.http.get<FavMovies[]>('http://localhost:3000/user/fav-movies')
  }
}
