import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { from } from 'rxjs';
import { CargaPedidosComponent } from './carga-pedidos/carga-pedidos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PedidosService } from './servicios/pedidos.service';
import { PedidosRoutingModule } from './pedidos-routing.module';



@NgModule({
    declarations: [CargaPedidosComponent, PedidosComponent ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        PedidosRoutingModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatCardModule,
        MatMenuModule,
        MatTableModule,
        HttpClientModule,
        MatGridListModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatIconModule
    ],
    providers: [PedidosService]
  })

export class PedidosModule {}