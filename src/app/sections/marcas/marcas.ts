import { Component, inject, Input } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.html',
  styleUrl: './marcas.scss'
})
export class Marcas {
  @Input() marca!: string;
  @Input() srcMarcas: string[] = [];
  appService = inject(AppService);

  get mensaje() {
    return `Hola estoy interesado en repuestos ${this.marca} para transmisión`;
  }
}