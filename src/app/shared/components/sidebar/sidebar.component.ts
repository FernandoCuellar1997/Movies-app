import { Component, ViewChild } from '@angular/core';
import { MovieService } from '../../../movies/services/MovieService.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor( private moviesService:MovieService){}

  get historyMovies():string[]{
    return this.moviesService.moviesList;
  }

}
