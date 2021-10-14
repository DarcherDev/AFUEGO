import { Component, Input } from '@angular/core';
import { Prenda } from '../../interfaces/prenda.interface';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styles: [`
    mat-card{
      margin-top: 20px;
    }
  `]
})
export class TarjetaComponent {

  @Input() prenda!: Prenda;

}
