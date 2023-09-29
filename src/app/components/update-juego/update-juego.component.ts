import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IJuego } from 'src/app/models/juego';
import { JuegoService } from 'src/app/services/juego.service';

@Component({
  selector: 'app-update-juego',
  templateUrl: './update-juego.component.html',
  styleUrls: ['./update-juego.component.css']
})
export class UpdateJuegoComponent implements OnInit {


  mensajeExito : boolean = false;
  listaJuegos: IJuego[] = [];
  juegoSeleccionado: IJuego | null = null;
  precioInput: number = 0;
  faltaNombre = false;
  precioValido: boolean = true;
  mensajePrecio: boolean = false;



  constructor(private juegoService: JuegoService) { }

  ngOnInit(): void {
    this.listaJuegos = this.juegoService.getJuegos();
  }

  modificarJuego(form: NgForm) {
    if (this.juegoSeleccionado) {
      if (this.precioInput <= 0) {
        this.precioValido = false;
        this.mensajePrecio = false;
        return; // No se modifica el juego si el precio no es válido
      }
      console.log('Valores del formulario:', this.juegoSeleccionado, this.precioInput);

      this.juegoSeleccionado.precio = this.precioInput;


      this.juegoService.updateJuego(this.juegoSeleccionado);
      this.mensajeExito = true;

      form.reset();
      this.limpiar();

      setTimeout(() => {
        this.mensajeExito=false;
      }, 3000)

    }
  }

  limpiar() {
    this.precioValido = true;    
    this.juegoSeleccionado = null;

  }
}
