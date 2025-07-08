import { Component } from '@angular/core';
import { Vehiculos } from '../vehiculos';

@Component({
  selector: 'app-volkswagen',
  template: '<app-vehiculos [marca]="marca" [srcMarcas]="srcMarcas" />',
  imports: [Vehiculos]
})
export class Volkswagen {
  marca: string = 'Volkswagen';
  srcMarcas: string[] = [
    "vw/Polo.webp",
    "vw/Nivus.webp",
    "vw/Amarok.webp"
  ];
}