import { Component, inject } from '@angular/core';
import { AppService } from '../../app.service';
import { ScrollAnimateDirective } from '../../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.scss',
  imports: [ScrollAnimateDirective]
})
export class Catalogo {
  appService = inject(AppService);
}