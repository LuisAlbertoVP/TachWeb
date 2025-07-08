import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
  imports: [RouterLink]
})
export class Inicio {
  appService = inject(AppService);
}