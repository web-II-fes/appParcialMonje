import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PedidosService } from '../servicios/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  displayedColumns: string[] = ['nombreCliente', 'direccionCliente', 'pedidoCliente', 'fechaEntrega', 'editar', 'borrar'];
  dataSource: any[] = [];

  idPedido: any;

  constructor(private pedidosService: PedidosService, private router: Router) { }

  ngOnInit() {
    this.getPedidos();
  }

  
  getPedidos(){
    debugger;
    this.pedidosService.getPedidos().subscribe((data : any) => {
      this.dataSource = data;
    });
  }

  editar(idPedido){
    debugger;
    this.router.navigate(['/pedidos/crear-pedidos/' + idPedido]);
  }

  borrar(idPedido){
    this.idPedido = idPedido;
    this.pedidosService.borrarPedido(this.idPedido).subscribe((data: any )=>{
      let pedidoBorrado = idPedido;
    });
    location.reload();
  }

}
