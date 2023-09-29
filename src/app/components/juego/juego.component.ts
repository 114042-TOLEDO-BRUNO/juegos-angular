import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { IJuego } from 'src/app/models/juego';
import { JuegoService } from 'src/app/services/juego.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit{

juego={
  nombre:'',
  precio:0,
  categoria:'',
  foto:''
}
nombreDuplicado=false;
faltaNombre=false;
mensajeExito=false;

constructor(private juegoService:JuegoService){}
  ngOnInit(): void {
    this.juego.precio=1;    
  }
  limpiar(){
    this.mensajeExito=true;
    this.juego.nombre='';
    this.juego.precio=1;
    this.juego.categoria='';
    this.juego.foto='';
  }
  crearJuego(form:NgForm){    
    let juego:IJuego={
      nombre:form.value.nombre,
      precio:form.value.precio,
      categoria:form.value.categoria,
      foto:form.value.foto,
      fecha:new Date()
    }

    if(this.faltaNombre){
      console.log('falta nombre juego');
      return;
    }
    if(juego.precio<=0){
      console.log('corregir precio');
      return;
    }
    if(juego.categoria ===''){
      console.log('falta categoria');
      return;
    }else{
      
      this.juegoService.addJuego(juego);

      console.log('juego añadido',juego);

      form.reset();

      this.limpiar();

      setTimeout(()=>{
        this.mensajeExito=false;
      },3000)
    }
  }
}
