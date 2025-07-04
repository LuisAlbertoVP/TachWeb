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
        path: 'marcas/chevrolet',
        loadComponent: () => import('./sections/marcas/chevrolet/chevrolet').then(c => c.Chevrolet)
    },
    {
        path: 'marcas/jeep',
        loadComponent: () => import('./sections/marcas/jeep/jeep').then(c => c.Jeep)
    },
    {
        path: 'marcas/volkswagen',
        loadComponent: () => import('./sections/marcas/volkswagen/volkswagen').then(c => c.Volkswagen)
    }
];
