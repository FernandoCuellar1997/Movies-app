import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardComponent } from './components/card/card.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardComponent,
    MoviesListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],exports:[HomePageComponent]
})
export class MoviesModule { }
