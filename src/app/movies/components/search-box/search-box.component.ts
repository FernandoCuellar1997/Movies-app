import { Component, ElementRef, ViewChild } from '@angular/core';
import { MovieService } from '../../services/MovieService.service';

@Component({
  selector: 'movies-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  constructor(private movieService:MovieService){}

  @ViewChild('txtSearch')
  public searchBox!:ElementRef<HTMLInputElement>;


  sendWord():void{
    const send:string=this.searchBox.nativeElement.value.toLowerCase();
    this.movieService.saveMovie(send);
    this.searchBox.nativeElement.value='';
  }
}
