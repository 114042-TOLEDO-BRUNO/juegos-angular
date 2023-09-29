import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IJuego } from 'src/app/models/juego';
import { JuegoService } from 'src/app/services/juego.service';

@Component({
  selector: 'app-list-juegos',
  templateUrl: './list-juegos.component.html',
  styleUrls: ['./list-juegos.component.css']
})
export class ListJuegosComponent implements OnInit,OnChanges {
  localJuegoList: IJuego[] = [];

  constructor(private juegoService: JuegoService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['inputPrecio']) { // Reemplaza 'inputProperty' con el nombre de la propiedad de entrada que deseas rastrear.
      this.actualizarListaJuegos();
      console.log('hubo cambios',this.juegoService.getJuegos());
      console.log('cambios',this.juegoService.listJuegos);
      
      
    }
  }

  ngOnInit(): void {
    this.actualizarListaJuegos();
  }

  private actualizarListaJuegos() {
    this.localJuegoList = this.juegoService.getJuegos();
  }

  borrarJuego(juego:IJuego){
    this.juegoService.deleteJuego(juego);
    this.actualizarListaJuegos();
  }

  agregarComentario(juego: IJuego, comentario: string) {
    // Asegúrate de que el juego tenga una propiedad para los comentarios
    if (!juego.comentarios) {
      juego.comentarios = [];
    }
    // Agrega el comentario al juego
    juego.comentarios.push(comentario);
  }

}
