import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'pedidos',
    loadChildren: () => import('./modules/pedidos/pedidos.module').then(m => m.PedidosModule)
  },

  {
    path: '',
    redirectTo: 'pedidos',
    pathMatch: 'full'
}, 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
