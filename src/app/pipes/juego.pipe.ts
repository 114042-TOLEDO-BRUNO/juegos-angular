import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'juego'
})
export class JuegoPipe implements PipeTransform {

  transform(fecha:Date): string {    
    const formatoFecha=`${fecha.toLocaleDateString()} ${fecha.toLocaleTimeString()}`;
    return `Fecha: ${formatoFecha}`;
  }

}
