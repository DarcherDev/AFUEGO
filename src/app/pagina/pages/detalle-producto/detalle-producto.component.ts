import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrendaService } from '../../services/prenda.service';
import { Prenda } from '../../interfaces/prenda.interface';
import { switchMap }from 'rxjs/operators';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  prendas!:Prenda;

  constructor(private ActivateRoute:ActivatedRoute,
              private PrendaService:PrendaService) { }

  ngOnInit(): void {
    this.ActivateRoute.params
    .pipe(
      switchMap(({id})=> this.PrendaService.getPrendaPorId(id))
    )
  }

}


