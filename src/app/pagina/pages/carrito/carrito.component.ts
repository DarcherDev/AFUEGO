import { Component, Input } from '@angular/core';

import { Pedido } from '../../interfaces/pedido.interface';
import { Prenda } from '../../interfaces/prenda.interface';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']

})
export class CarritoComponent {

  @Input() pedido!: Pedido;
  @Input() prenda!: Prenda;
  prendas: Prenda[] = [];

  mas(){
    this.pedido.cantidad = this.pedido.cantidad + 1;
  }

  menos(){
    this.pedido.cantidad = this.pedido.cantidad - 1;
  }

}
