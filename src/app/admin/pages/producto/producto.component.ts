import { Component, OnInit } from '@angular/core';
import { Prenda } from '../../interfaces/prenda.interface';
import { PrendaService } from '../../services/prenda.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent implements OnInit {

  prendas: Prenda[] = [];
  private prendaService: PrendaService;

  constructor(PrendaService: PrendaService) {
    this.prendaService = PrendaService;
  }

  ngOnInit(): void {
    this.prendaService.getPrenda().subscribe(prendas => this.prendas = prendas);
  }
}
