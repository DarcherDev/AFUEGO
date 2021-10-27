import { Component, Input } from '@angular/core';
import { Prenda } from '../../interfaces/prenda.interface';

@Component({
  selector: 'app-informacion-prenda',
  templateUrl: './informacion-prenda.component.html',
  styleUrls: ['./informacion-prenda.component.css']
})
export class InformacionPrendaComponent   {

  @Input() prenda!: Prenda;  

}
