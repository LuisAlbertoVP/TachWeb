import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./sections/inicio/inicio').then(c => c.Inicio)
    },
    {
        path: 'quienes-somos',
        loadComponent: () => import('./sections/quienes-somos/quienes-somos').then(c => c.QuienesSomos)
    },
    {
        path: 'contacto',
        loadComponent: () => import('./sections/contacto/contacto').then(c => c.Contacto)
    },
    {
        path: 'vehiculos/chevrolet',
        loadComponent: () => import('./sections/vehiculos/chevrolet/chevrolet').then(c => c.Chevrolet)
    },
    {
        path: 'vehiculos/jeep',
        loadComponent: () => import('./sections/vehiculos/jeep/jeep').then(c => c.Jeep)
    },
    {
        path: 'vehiculos/volkswagen',
        loadComponent: () => import('./sections/vehiculos/volkswagen/volkswagen').then(c => c.Volkswagen)
    },
    {
        path: 'catalogo',
        loadComponent: () => import('./sections/catalogo/catalogo').then(c => c.Catalogo)
    }
];
