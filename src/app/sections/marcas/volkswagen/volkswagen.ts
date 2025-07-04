import { Component } from '@angular/core';
import { Marcas } from '../marcas';

@Component({
  selector: 'app-volkswagen',
  template: '<app-marcas [marca]="marca" [srcMarcas]="srcMarcas" />',
  imports: [Marcas]
})
export class Volkswagen {
  marca: string = 'Volkswagen';
  srcMarcas: string[] = [
    "vw/Polo.webp",
    "vw/Nivus.webp",
    "vw/Amarok.webp"
  ];
}