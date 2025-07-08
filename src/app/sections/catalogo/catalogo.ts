import { Component, inject } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.scss'
})
export class Catalogo {
  appService = inject(AppService);
}