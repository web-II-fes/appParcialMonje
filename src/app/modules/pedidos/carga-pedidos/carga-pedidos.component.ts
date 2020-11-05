import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidosService } from '../servicios/pedidos.service';

@Component({
  selector: 'app-carga-pedidos',
  templateUrl: './carga-pedidos.component.html',
  styleUrls: ['./carga-pedidos.component.css']
})
export class CargaPedidosComponent implements OnInit {

  pedidosForm: FormGroup;
  idPedido: any;

  constructor(
    private fb: FormBuilder,
    private pedidosServive: PedidosService, 
    private paramRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.initForm();

    this.paramRoute.paramMap.subscribe( param => {
    debugger;
      this.idPedido =  param.get('id');
      if (this.idPedido !== 'new'){
        this.getCursoById(this.idPedido)
      
      }      
    });
  }

  getCursoById(idPedido: string){
    this.pedidosServive.getPedidoById(idPedido).subscribe(data =>{
      debugger;
      let pedidoId = data;

      this.pedidosForm.patchValue(pedidoId);
    })
  }


  initForm(){
    this.pedidosForm = this.fb.group({
      nombreCliente: [''],
      direccionCliente: [''],
      pedidoCliente: [''],
      fechaEntrega: ['']
    });
  }


  submit(){
    debugger;
    if(this.idPedido !== 'new'){
        this.pedidosServive.editarPedido(this.idPedido, this.pedidosForm.value).subscribe(data => {
         let pedidoEditado = data;
        });
    }else{
      this.pedidosServive.guardarPedido(this.pedidosForm.value).subscribe(data =>{
         let pedidoNuevo = data;
      }); 
    } 

    this.router.navigate(['/pedidos/pedidos'])

  }

}
