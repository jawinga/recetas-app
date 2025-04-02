import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Receta } from '../../models/receta';
import { OnInit } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-lista-recetas',
  imports: [NgClass],
  templateUrl: './lista-recetas.component.html',
  styleUrl: './lista-recetas.component.scss',
})
export class ListaRecetasComponent implements OnInit {
  @Input() receta!: Receta;
  @Output() cambiarFavorito = new EventEmitter<Receta>();
  public clasesReceta = {};

  ngOnInit(): void {
    this.clasesReceta = {
      esFavorito: this.receta.esFavorito,
      vegetariano: this.receta.esVegetariano,
      desayuno: this.receta.categoria === 'desayuno',
      postre: this.receta.categoria === 'postre',
      express: this.receta.categoria === 'express',
      internacional: this.receta.categoria === 'internacional',
      sano: this.receta.categoria === 'sano',
      elaborado: this.receta.categoria === 'elaborado',
    };
  }

  esFavorito(): void {
    this.receta.esFavorito = !this.receta.esFavorito;
    this.cambiarFavorito.emit(this.receta);
  }
}
