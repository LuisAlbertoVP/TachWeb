import { Component } from '@angular/core';
import { Marcas } from '../marcas';

@Component({
  selector: 'app-jeep',
  template: '<app-marcas [marca]="marca" [srcMarcas]="srcMarcas" />',
  imports: [Marcas]
})
export class Jeep {
  marca: string = 'Jeep';
  srcMarcas: string[] = [
    "jeep/Grand-Cherokee.avif",
    "jeep/Compass.avif",
    "jeep/Wrangler.avif"
  ];
}