import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  private pedidoUrl = 'http://localhost:3002/api/modules/pedidos/';

  constructor(private httpClient: HttpClient) { }

  guardarPedido(pedido: any){
    return this.httpClient.post(this.pedidoUrl + 'pedido', JSON.stringify(pedido), this.httpOptions);
  }

 getPedidos(){
    return this.httpClient.get(this.pedidoUrl + 'pedido');
  } 

  getPedidoById(idPedido: string){
    return this.httpClient.get(this.pedidoUrl + 'pedidoId/' + idPedido);
  }


  editarPedido( idPedido, pedido ){
    return this.httpClient.put(this.pedidoUrl + 'pedido/' + idPedido, JSON.stringify(pedido),this.httpOptions);
  }

  borrarPedido( idPedido ){
    return this.httpClient.delete(this.pedidoUrl + 'pedido/' + idPedido, this.httpOptions);
  }
}
