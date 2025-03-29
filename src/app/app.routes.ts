import { Routes } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';
import { HireComponent } from './components/hire/hire.component';
import { WorkComponent } from './components/work/work.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
    { path: 'work', component: WorkComponent },
    { path: 'clients', component: ClientsComponent },
    { path: 'hire', component: HireComponent },
    { path: '**', redirectTo: 'home' }

];
