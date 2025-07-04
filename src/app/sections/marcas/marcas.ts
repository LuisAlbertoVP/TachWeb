import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.html',
  styleUrl: './marcas.scss'
})
export class Marcas {
  @Input() marca!: string;
  @Input() srcMarcas: string[] = [];

  get mensaje() {
    return encodeURIComponent(`Hola estoy interesado en repuestos ${this.marca} para transmisión`);
  }
}