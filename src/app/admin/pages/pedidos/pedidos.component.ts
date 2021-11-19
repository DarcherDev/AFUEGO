import { Component, OnInit } from '@angular/core';
import { Prenda } from '../../interfaces/prenda.interface';
import { PrendaService } from '../../services/prenda.service';
import { Pedido } from '../../interfaces/pedido.interface';
import { PedidosService } from '../../services/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  prendas: Prenda[] = [];
  pedidos: Pedido[] = [];

  private prendaService: PrendaService;
  private pedidosService: PedidosService;

  constructor(PrendaService: PrendaService, pedidosService: PedidosService) {
    this.prendaService = PrendaService;
    this.pedidosService = pedidosService;
  }

  ngOnInit(): void {
    this.prendaService.getPrenda().subscribe(prendas => this.prendas = prendas);
    this.pedidosService.getPedido().subscribe( pedidos => this.pedidos = pedidos);
  }
}
