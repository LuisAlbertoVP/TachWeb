import { Component } from '@angular/core';
import { Vehiculos } from '../vehiculos';

@Component({
  selector: 'app-jeep',
  template: '<app-vehiculos [marca]="marca" [srcMarcas]="srcMarcas" />',
  imports: [Vehiculos]
})
export class Jeep {
  marca: string = 'Jeep';
  srcMarcas: string[] = [
    "jeep/Grand-Cherokee.avif",
    "jeep/Compass.avif",
    "jeep/Wrangler.avif"
  ];
}