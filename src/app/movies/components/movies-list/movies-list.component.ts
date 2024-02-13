import { Component, Input } from '@angular/core';
import { Movie, Result } from '../../interfaces/movie.interface';

@Component({
  selector: 'movies-list-card',
  templateUrl: './movies-list.component.html',
  styles: ``
})
export class MoviesListComponent {

  @Input()
  public movie:Result[]=[];
}
