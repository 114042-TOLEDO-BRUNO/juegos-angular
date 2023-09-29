import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'juegos';

  indiceComponente: number = 0;

  mostrarComponente(index: number) {
    this.indiceComponente = index;
  }

}
