import { Component } from '@angular/core';
import { MovieService } from '../../services/MovieService.service';
import { Movie, Result } from '../../interfaces/movie.interface';

@Component({
  selector: 'movies-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

  constructor(private movieService:MovieService){}

  get moviesList():Result[]{
    return this.movieService.moviesListFin;
  }

}
