import { Component } from '@angular/core';
import { Marcas } from '../marcas';

@Component({
  selector: 'app-chevrolet',
  template: '<app-marcas [marca]="marca" [srcMarcas]="srcMarcas" />',
  imports: [Marcas]
})
export class Chevrolet {
  marca: string = 'Chevrolet';
  srcMarcas: string[] = [
    "chevrolet/Onix.avif",
    "chevrolet/Groove.avif",
    "chevrolet/Blazer.avif"
  ];
}