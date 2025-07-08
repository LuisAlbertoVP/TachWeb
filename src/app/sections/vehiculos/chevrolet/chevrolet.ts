import { Component } from '@angular/core';
import { Vehiculos } from '../vehiculos';

@Component({
  selector: 'app-chevrolet',
  template: '<app-vehiculos [marca]="marca" [srcMarcas]="srcMarcas" />',
  imports: [Vehiculos]
})
export class Chevrolet {
  marca: string = 'Chevrolet';
  srcMarcas: string[] = [
    "chevrolet/Onix.avif",
    "chevrolet/Groove.avif",
    "chevrolet/Blazer.avif"
  ];
}