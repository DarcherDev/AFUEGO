import { Pipe, PipeTransform } from '@angular/core';
import { Prenda } from '../interfaces/prenda.interface';
@Pipe({
  name: 'imagen',
  // forma chambona de actualizar un pipe
  pure: false
})
export class ImagenPipe implements PipeTransform {

  img:string ="";

  transform(prenda:Prenda): string {

    if((!prenda.id && !prenda.alt_img ) || prenda.alt_img ===''){
      this.img='assets/no-image.png';
    }else if(prenda.alt_img){
      this.img = prenda.alt_img;
    }else{
      this.img=`assets/heroes/${prenda.id}.jpg`;
    }  
    return this.img;
  }

}