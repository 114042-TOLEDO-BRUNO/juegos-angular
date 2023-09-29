import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JuegoComponent } from './components/juego/juego.component';
import { ListJuegosComponent } from './components/list-juegos/list-juegos.component';
import { JuegoPipe } from './pipes/juego.pipe';
import { UpdateJuegoComponent } from './components/update-juego/update-juego.component';
import { DetalleJuegoComponent } from './components/detalle-juego/detalle-juego.component';



@NgModule({
  declarations: [
    AppComponent,
    JuegoComponent,
    ListJuegosComponent,
    JuegoPipe,
    UpdateJuegoComponent,
    DetalleJuegoComponent
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
