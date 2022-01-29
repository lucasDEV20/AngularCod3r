//---------------------------------------------------------

/*
Author : @LucasDEV20
Year : @2021
*/

//---------------------------------------------------------

import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[myFor]"
})
export class ForDirective implements OnInit {
  //implementaçao de um cicli de vida
  @Input("myForEm") numbers: number[];

  constructor(
    private container: ViewContainerRef, 
    private template: TemplateRef<any>)
    
    {}
  ngOnInit(): void {
    for (let number of this. numbers) {
      //um template para cada numero que 
      //e direcionado pelo vetor.
      this.container.createEmbeddedView(
      this.template, {$implicit: number});
      //com  isso inves do resultado ser apaenas um espaço
      //aparacera o numero que esta dentro do array, que esta no parametro 'number'
    }
    //console.log(this.numbers);
  }
}
