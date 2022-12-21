import { Component, OnInit } from '@angular/core';
import { FavMovies } from '../fav-movies';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-fav-movies',
  templateUrl: './fav-movies.component.html',
  styleUrls: ['./fav-movies.component.css']
})
export class FavMoviesComponent implements OnInit {

  constructor(private movieService: MoviesService) { }
  favMovies: FavMovies[] = [];
  ngOnInit(): void {
    this.movieService.getFavMovies().subscribe((data) =>
      this.favMovies = data)
  }
}
