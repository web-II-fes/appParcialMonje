import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargaPedidosComponent } from './carga-pedidos/carga-pedidos.component';
import { PedidosComponent } from './pedidos/pedidos.component';


const routes: Routes = [
    
      {path: 'pedidos', component: PedidosComponent, pathMatch: 'full'},
      {path: 'crear-pedidos', component: CargaPedidosComponent},
      {path: 'crear-pedidos/:id', component: CargaPedidosComponent}
];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PedidosRoutingModule { }