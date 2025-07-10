import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppService } from '../../app.service';
import { AppearOnScrollDirective } from '../../../shared/directives/appear-scroll.directive';
import { ScrollAnimateDirective } from '../../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
  imports: [RouterLink, AppearOnScrollDirective, ScrollAnimateDirective]
})
export class Inicio {
  appService = inject(AppService);
}