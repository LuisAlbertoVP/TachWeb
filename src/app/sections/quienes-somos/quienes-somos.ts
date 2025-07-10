import { Component, inject } from '@angular/core';
import { AppService } from '../../app.service';
import { ScrollAnimateDirective } from '../../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.html',
  styleUrl: './quienes-somos.scss',
  imports: [ScrollAnimateDirective]
})
export class QuienesSomos {
  appService = inject(AppService);
}