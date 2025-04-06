import { Component } from '@angular/core';
import { ListaRecetasComponent } from '../lista-recetas/lista-recetas.component';
import { Receta } from '../../models/receta';
import { RecetaService } from '../../services/receta.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-recetas-page',
  imports: [ListaRecetasComponent, RouterLink],
  templateUrl: './lista-recetas-page.component.html',
  styleUrl: './lista-recetas-page.component.scss',
})
export class ListaRecetasPageComponent {
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
