import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';


import { switchMap } from 'rxjs/operators';

import { Prenda } from '../../interfaces/prenda.interface';
import { PrendaService } from '../../services/prenda.service';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {

  prenda: Prenda = {
    nombre: '',
    descripcion: '',
    precio: 0,
    alt_img: '',
  }

  private prendaService: PrendaService;
  private activatedRoute: ActivatedRoute;
  private router: Router;
  private snackBar: MatSnackBar;
  public dialog: MatDialog;


  constructor(prendaService: PrendaService, activatedRoute: ActivatedRoute, router: Router, snackBar: MatSnackBar, dialog: MatDialog) {
    this.prendaService = prendaService;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.snackBar = snackBar;
    this.dialog = dialog;
  }

  ngOnInit(): void {
    if(!this.router.url.includes('editar')){
      return;
    }

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.prendaService.getPrendaPorId(id))
    )
    .subscribe( prenda => this.prenda = prenda);
  }

  guardar(){
    if(this.prenda.nombre.trim().length === 0){
      return;
    }

    if(this.prenda.id){
      //actualizar
      this.prendaService.editarPrenda(this.prenda).subscribe(prenda => this.mostrarsnackBar('Registro Actualizaco'))
    }else{
      //crear
      this.prendaService.agregarPrenda(this.prenda).subscribe(prenda => {
        this.router.navigate(['/admin/editar', prenda.id]);
      })      
    }
  }

  eliminar(){
    const dialog = this.dialog.open(ConfirmarComponent, {
      // width: '250px',
      // con data mandamos la informacion del objeto mas no la referencia al ponerlo entre llaves
      data: {...this.prenda}
    });
    dialog.afterClosed().subscribe((result) =>{
      if( result){
        this.prendaService.BorrarPrenda(this.prenda.id!).subscribe(resp =>{
          this.router.navigate(['/admin/home']);
          this.mostrarsnackBar('Registro eliminado')
        });
      }
    })
  }

  mostrarsnackBar(mensaje: string) {
    this.snackBar.open(mensaje, 'ok',{
      duration: 2500
    });
  }
}
