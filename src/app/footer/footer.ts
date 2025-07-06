import { Component, inject } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
    appService = inject(AppService);
    mensajeWhatsapp = 'Hola, vi su página web y quisiera saber más sobre sus productos.';
    year: number = new Date().getFullYear();
}