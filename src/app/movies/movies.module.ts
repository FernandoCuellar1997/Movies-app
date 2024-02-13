import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardComponent } from './components/card/card.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardComponent,
    MoviesListComponent
  ],
  imports: [
    CommonModule
  ],exports:[HomePageComponent]
})
export class MoviesModule { }
