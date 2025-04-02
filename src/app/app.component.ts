import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaRecetasComponent } from './pages/lista-recetas/lista-recetas.component';
import { Receta } from './models/receta';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaRecetasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Recetor';

  enCambiarFavorito(actualizarReceta: Receta) {
    console.log('Ha cambiado el estado de favorito', actualizarReceta.nombre);
  }

  receta: Receta[] = [];

  recetas = [
    new Receta(
      1,
      'Paella Valenciana',
      ['arroz', 'pimiento verde', 'rabo de toro'],
      ['Preparar arroz', 'Echar arroz', 'Comer'],
      135,
      '',
      'elaborado',
      400,
      'Paella española',
      false,
      false
    ),
  ];
}
