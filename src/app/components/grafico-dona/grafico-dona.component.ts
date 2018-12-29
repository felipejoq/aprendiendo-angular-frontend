import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input()
  etiquetas:string[] = [];
  @Input()
  datos:number[] = [];
  @Input()
  tipo:string = '';
  @Input()
  leyenda:string = 'Leyenda'

  constructor() {
    
  }

  ngOnInit() {
  }

}
