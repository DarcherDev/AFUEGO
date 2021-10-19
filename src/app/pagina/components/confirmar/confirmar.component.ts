import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Prenda } from '../../interfaces/prenda.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css']
})
export class ConfirmarComponent implements OnInit {

  private matDialogRef : MatDialogRef<ConfirmarComponent>;

  constructor(matDialogRef : MatDialogRef<ConfirmarComponent>, @Inject(MAT_DIALOG_DATA) public data: Prenda) { 
    this.matDialogRef = matDialogRef;
  }

  ngOnInit(): void {
  }

  borrar(){
    this.matDialogRef.close(true);
    
  }
  cerrar(){
    this.matDialogRef.close();
  }

}
