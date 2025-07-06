import { Component, inject } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.html',
  styleUrl: './quienes-somos.scss'
})
export class QuienesSomos {
  appService = inject(AppService);
}