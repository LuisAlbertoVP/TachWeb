import { Component, inject } from '@angular/core';
import { AppService } from '../../app.service';
import { ScrollAnimateDirective } from '../../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss',
  imports: [ScrollAnimateDirective]
})
export class Contacto {
  appService = inject(AppService);
}