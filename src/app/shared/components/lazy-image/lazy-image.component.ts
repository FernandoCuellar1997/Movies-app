import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styles: ``
})
export class LazyImageComponent {

  constructor(){
    this.mostrarSvg=true;
  }

  @Input()
  public url:string='';

  @Input()
  public mostrarSvg:boolean=false;

  @Input()
  public alt:string='';
  public hasLoader=false;


  onLoad():void{
    setTimeout(()=>{
      this.hasLoader=true;
    },100)

  }

}
