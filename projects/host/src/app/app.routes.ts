import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    {
        path: '',
        component: AdminComponent
    },{
        path:'mfe1',
        loadChildren: () => import('remoteApp1/homeModule').then(m => m.HomeModule)
    },{
        path:'mfe2',
        loadChildren: () => import('remoteApp2/homeModule').then(m => m.HomeModule)
    }
];
