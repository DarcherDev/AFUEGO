import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';

import { switchMap } from 'rxjs/operators';

import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';


import { UsersService } from '../../services/users.service';
import { Cliente } from '../../interfaces/cliente.interface';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  hide=true;

  cliente: Cliente = {
    nombres:'',
    apellidos:'',
    documentoIdentidad:'',
    correo:'',
    celular:'',
    direccion:'',
    departamento:'',
    cidudad:'',
  }

  private clienteService: ClienteService;
  private activatedRoute: ActivatedRoute;
  private router: Router;
  private snackBar: MatSnackBar;
  public dialog: MatDialog;
  
  constructor(clienteService: ClienteService, activatedRoute: ActivatedRoute, router: Router, snackBar: MatSnackBar, dialog: MatDialog){
    this.clienteService = clienteService;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.snackBar = snackBar;
    this.dialog = dialog;
  }



  ngOnInit(): void {
    
  }
  
  guardar(){
    if(this.cliente.nombres.trim().length === 0){
      return;
    }
      //crear
      this.clienteService.agregarCliente(this.cliente).subscribe(cliente => {
        this.router.navigate(['/home']);
        this.mostrarsnackBar('Registro exitoso')
      })      
    
  }

  mostrarsnackBar(mensaje: string) {
    this.snackBar.open(mensaje, 'ok',{
      duration: 2500
    });
  }
}

