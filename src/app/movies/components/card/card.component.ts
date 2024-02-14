import { Component, ElementRef, Input, Output, ViewChild } from '@angular/core';
import { Movie, Result } from '../../interfaces/movie.interface';

@Component({
  selector: 'movie-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  public movie!:Result;

  @Output()
  public mostrarAnimacion:boolean=true;

  public contador:number=0;
  public bandera:boolean=true;
  seeSinopsis():void{
    /* True> se muestra la imagen */
    /* False> se muestra la sinopsis */
    if(this.contador%2===0){
      this.bandera=false;
    }else{
      this.bandera=true;
    }
    this.contador+=1;
    this.mostrarAnimacion=false;
  }
}
