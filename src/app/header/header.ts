import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from '../../models/MenuItem';
import { AppService } from '../app.service';
declare const bootstrap: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
  imports: [RouterLink]
})
export class Header {
  @ViewChild('offcanvasRef', { static: false }) offcanvasRef!: ElementRef;
  vehiculos: MenuItem[] = [
    {link: '/vehiculos/chevrolet', nombre: 'Chevrolet'},
    {link: '/vehiculos/jeep', nombre: 'Jeep'},
    {link: '/vehiculos/volkswagen', nombre: 'Volkswagen'}
  ];
  appService = inject(AppService);
  mensajeWhatsapp = 'Hola, vi su página web y quisiera saber más sobre sus productos.';

  closeOffcanvas() {
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(this.offcanvasRef.nativeElement);
    if (bsOffcanvas) {
      bsOffcanvas.hide();
    }
  }
}