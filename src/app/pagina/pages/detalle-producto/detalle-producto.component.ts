import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Prenda } from '../../interfaces/prenda.interface';
import { PrendaService } from '../../services/prenda.service';
@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  prenda!: Prenda;

  private PrendaService: PrendaService;
  private activatedRoute: ActivatedRoute;
  private router: Router;

  constructor( activatedRoute: ActivatedRoute, PrendaService: PrendaService, router: Router) {
    this.PrendaService = PrendaService;
    this.activatedRoute = activatedRoute;
    this.router = router;
   }

   ngOnInit(): void {
    this.activatedRoute.params.pipe(
      //metodo switchMap para utilizar el servicio de getPrendaPorId usando la desestruturacion
      switchMap( ({ id }) => this.PrendaService.getPrendaPorId(id))
      //me subscribo al servicio para obtener el prenda
    ).subscribe( prenda => this.prenda = prenda)
  }
  
  regresar(){
    this.router.navigate(['/pagina/home'])
  }

}


