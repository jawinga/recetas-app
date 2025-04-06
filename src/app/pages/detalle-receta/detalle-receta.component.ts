import { Component, OnInit } from '@angular/core';
import { Receta } from '../../models/receta';
import { RecetaService } from '../../services/receta.service';
import { ActivatedRoute } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-detalle-receta',
  imports: [NgFor],
  templateUrl: './detalle-receta.component.html',
  styleUrl: './detalle-receta.component.scss',
})
export class DetalleRecetaComponent implements OnInit {
  recetaId!: number;
  receta!: Receta;

  constructor(
    private route: ActivatedRoute,
    private recetaService: RecetaService
  ) {}

  ngOnInit(): void {
    this.recetaId = Number(this.route.snapshot.paramMap.get('id'));

    this.recetaService.getRecetasPorID(this.recetaId).subscribe((data) => {
      this.receta = data;
    });
  }
}
