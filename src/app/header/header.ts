import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { MenuItem } from '../../models/MenuItem';
import { AppService } from '../app.service';
import { NavigationTransitionService } from '../../shared/services/navigation-transition';
declare const bootstrap: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  @ViewChild('offcanvasRef', { static: false }) offcanvasRef!: ElementRef;
  vehiculos: MenuItem[] = [
    {link: '/vehiculos/chevrolet', nombre: 'Chevrolet'},
    {link: '/vehiculos/jeep', nombre: 'Jeep'},
    {link: '/vehiculos/volkswagen', nombre: 'Volkswagen'}
  ];
  appService = inject(AppService);
  navService = inject(NavigationTransitionService);

  closeOffcanvas() {
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(this.offcanvasRef.nativeElement);
    if (bsOffcanvas) {
      bsOffcanvas.hide();
    }
  }
}