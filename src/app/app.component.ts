import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ListaRecetasComponent } from './pages/lista-recetas/lista-recetas.component';
import { Receta } from './models/receta';
import { RecetaService } from './services/receta.service';
import { ListaRecetasPageComponent } from './pages/lista-recetas-page/lista-recetas-page.component';
import { DetalleRecetaComponent } from './pages/detalle-receta/detalle-receta.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterModule,
    ListaRecetasComponent,
    ListaRecetasPageComponent,
    DetalleRecetaComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Recetor';

  constructor(private recetaService: RecetaService) {}

  enCambiarFavorito(actualizarReceta: Receta) {
    console.log('Ha cambiado el estado de favorito', actualizarReceta.nombre);
  }

  ngOnInit(): void {
    this.recetaService.getRecetas().subscribe((datos) => {
      this.recetas = datos;
    });
  }

  recetas: Receta[] = [];
}
