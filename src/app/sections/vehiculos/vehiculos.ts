import { Component, inject, Input } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.html',
  styleUrl: './vehiculos.scss'
})
export class Vehiculos {
  @Input() marca!: string;
  @Input() srcMarcas: string[] = [];
  appService = inject(AppService);

  get mensaje() {
    return `Hola estoy interesado en repuestos ${this.marca} para transmisión`;
  }
}