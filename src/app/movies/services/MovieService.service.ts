import { Injectable, LOCALE_ID } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Movie, Result } from '../interfaces/movie.interface';

@Injectable({providedIn: 'root'})
export class MovieService {
  constructor(private httpClient:HttpClient) {
    this.loadLocalStorage();
   }

  private moviesListFinal:Result[]=[];
  private listMovies:string[]=[];
  private api_key='142441e68199082ed7d1dbcf7d7b94cb';
  private serviceUrl='https://api.themoviedb.org/3/search/movie';

  get moviesList():string[]{
    return [...this.listMovies];
  }

  get moviesListFin():Result[]{
    return [...this.moviesListFinal];
  }

  saveLocalStorage():void{
    localStorage.setItem('history',JSON.stringify(this.listMovies));
  }

  loadLocalStorage():void{
    if(!localStorage.getItem('history'))return
    this.listMovies=JSON.parse(localStorage.getItem('history')!);
    if(this.listMovies.length===0) return
    this.saveMovie(this.listMovies[0]);
  }

  validateWord(word:string):void{
    if(word==='')return
    if(this.listMovies.includes(word)){
      this.listMovies=this.listMovies.filter(movie=>movie!==word);
    }
    this.listMovies.unshift(word);
    this.listMovies=this.listMovies.splice(0,10);
    this.saveLocalStorage();
  }

  saveMovie(tagMovie:string):void{
    this.validateWord(tagMovie);

    const params=new HttpParams()
    .set('api_key',this.api_key)
    .set('query',tagMovie);
    this.httpClient.get<Movie>(`${this.serviceUrl}`,{params})
    .subscribe((resp)=>{
      resp.results.forEach((res)=>{
        const rut=res.poster_path;
        res.poster_path=`https://image.tmdb.org/t/p/w500//${rut}`;
      });
      this.moviesListFinal=resp.results;
    });


  }


}
