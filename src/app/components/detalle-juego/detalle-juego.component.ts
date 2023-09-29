import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IJuego } from 'src/app/models/juego';

@Component({
  selector: 'app-detalle-juego',
  templateUrl: './detalle-juego.component.html',
  styleUrls: ['./detalle-juego.component.css']
})
export class DetalleJuegoComponent {
@Input() juego:IJuego={
  nombre:'',
  foto:'',
  precio:0,
  categoria:'',
  fecha:new Date()
}

@Output() comentarioEnviado = new EventEmitter<string>();

nuevoComentario='';
mostrarFormulario:boolean=true;

enviarComentario() {
  if (this.nuevoComentario.trim() !== '') {
    this.comentarioEnviado.emit(this.nuevoComentario);
    this.nuevoComentario = '';
  }
}

}
