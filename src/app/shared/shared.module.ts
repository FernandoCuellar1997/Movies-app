import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LazyImageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[SidebarComponent,LazyImageComponent]
})
export class SharedModule { }
