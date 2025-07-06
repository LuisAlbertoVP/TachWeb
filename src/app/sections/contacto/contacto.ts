import { Component, inject } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss'
})
export class Contacto {
  appService = inject(AppService);
}