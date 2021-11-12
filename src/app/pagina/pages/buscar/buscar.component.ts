import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Prenda } from '../../interfaces/prenda.interface';
import { PrendaService } from '../../services/prenda.service';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  prendaSeleccionada: Prenda = {
    nombre: '',
    descripcion: '',
    precio: 0,
    alt_img: '',
  }

  termino: string = "";

  prendas: Prenda[] = []

  private prendaService: PrendaService;


  constructor(prendaService: PrendaService) {
    this.prendaService = prendaService;
  }

  ngOnInit(): void {
  }

  buscando(){
    this.prendaService.getSugerencias(this.termino.trim()).subscribe(prendas => this.prendas = prendas)
  }
  opcionSeleccionada(event: MatAutocompleteSelectedEvent){
    
    if(!event.option.value){
      return;
    }
      const prenda: Prenda = event.option.value;
      this.termino = prenda.nombre;
      
      this.prendaService.getPrendaPorId(prenda.id!).subscribe(prenda => this.prendaSeleccionada=prenda);
  }
}
