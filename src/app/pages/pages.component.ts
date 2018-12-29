import { Component, OnInit } from '@angular/core';

declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Función que lanza las funciones que generan el sidebar
    // Libería que está fuera del router-outlet y que es código
    // de jQuery.
    init_plugins();
  }

}
