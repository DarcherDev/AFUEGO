import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../pages/home/home.component';
import { AgregarComponent } from '../pages/agregar/agregar.component';
import { PedidosComponent } from '../pages/pedidos/pedidos.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'home',
                component: HomeComponent,
            },
            {
                path: 'agregar',
                component: AgregarComponent,
            },
            {
                path: 'editar/:id',
                component: AgregarComponent,
            },
            {
                path: 'pedidos',
                component: PedidosComponent,
            },
            {
                path: '**',
                redirectTo: 'home'
            }
        ]
    }
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRouterModule { }