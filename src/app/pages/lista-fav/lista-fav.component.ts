import { Component } from '@angular/core';
import { ListaRecetasComponent } from '../lista-recetas/lista-recetas.component';
import { Receta } from '../../models/receta';
import { RecetaService } from '../../services/receta.service';
import { RouterLink } from '@angular/router';
import { OnInit } from '@angular/core';
import { ListaRecetasPageComponent } from '../lista-recetas-page/lista-recetas-page.component';

@Component({
  selector: 'app-lista-fav',
  imports: [RouterLink, ListaRecetasComponent],
  templateUrl: './lista-fav.component.html',
  styleUrl: './lista-fav.component.scss',
})
export class ListaFavComponent implements OnInit {
  constructor(private recetaService: RecetaService) {}

  recetas: Receta[] = [];
  recetasFav: Receta[] = [];

  ngOnInit(): void {
    this.recetaService.getRecetas().subscribe((datos) => {
      this.recetas = datos;
      this.recetasFav = this.recetas.filter((r) => {
        return r.esFavorito === true;
      });
    });

    this.recetasFav.forEach((element) => {
      console.log(element);
    });
  }
}
