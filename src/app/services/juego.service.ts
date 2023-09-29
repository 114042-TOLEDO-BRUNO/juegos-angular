import { Injectable } from '@angular/core';
import { IJuego } from '../models/juego';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  listJuegos:IJuego[]=[
    {nombre:'assasins Creed',precio:30000,categoria:'aventura',foto:'https://http2.mlstatic.com/D_NQ_NP_698114-MLA44367327995_122020-O.webp',fecha:new Date()},
    {nombre:'total war troy',precio:30000,categoria:'estrategia',foto:'https://http2.mlstatic.com/D_NQ_NP_940808-MLA47259863074_082021-O.webp',fecha:new Date()},
    {nombre:'PUBG',precio:10000,categoria:'accion',foto:'https://http2.mlstatic.com/D_NQ_NP_922091-MLA44598215185_012021-O.webp',fecha:new Date()},
    {nombre:'FIFA 23',precio:30000,categoria:'Deportes',foto:'https://http2.mlstatic.com/D_NQ_NP_816165-MLA53018854453_122022-O.webp',fecha:new Date()}
  ]


  constructor() { }

  getJuegos():IJuego[]{
    return this.listJuegos;
  }

  addJuego(juego:IJuego):void{
    this.listJuegos.push(juego);
  }

  getJuegoByIndex(juego: IJuego): number {
    return this.listJuegos.findIndex(jue =>
      jue.nombre === juego.nombre && jue.precio === juego.precio  
    );
  }

  updateJuego(juego: IJuego): void {
    const index = this.getJuegoByIndex(juego);
    if (index >= 0) {
      this.listJuegos[index].precio = juego.precio;
    }
    this.getJuegos();
    
  }

  deleteJuego(juego:IJuego):void{
    const index= this.getJuegoByIndex(juego);
    if(index>=0){
      this.listJuegos.splice(index,1);
    }
  }

}
