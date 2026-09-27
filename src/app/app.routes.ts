import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent: () => import('./views/home/home').then(m => m.Home)},
    {path: 'design-system', loadComponent: () => import('./views/design-system-playground/design-system-playground').then(m => m.DesignSystemPlayground)},
];
