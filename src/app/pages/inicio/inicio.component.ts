import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgFor } from '@angular/common';
import { RecetaService } from '../../services/receta.service';
import { Observable } from 'rxjs';
import { Receta } from '../../models/receta';

@Component({
  selector: 'app-inicio',
  imports: [RouterModule, FormsModule, ReactiveFormsModule, NgFor],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss',
})
export class InicioComponent {
  public recetaForm!: FormGroup;
  constructor(private fb: FormBuilder, private recetaService: RecetaService) {
    this.crearForm();
    this.recetaService.actualizarReceta().subscribe({});
  }

  public nuevoIngrediente?: String = '';
  public pasoNuevo?: String = '';

  public pasos: Array<string> = [];
  public ingredientes: Array<string> = [];

  crearForm() {
    this.recetaForm = this.fb.group({
      nombre: [null, [Validators.required, Validators.minLength(2)]],
      descripcion: [null, [Validators.required, Validators.minLength(10)]],
      categoria: [null, [Validators.required]],
      imagen: [null],
      esVegetariano: [null],
      calorias: [null, [Validators.required, Validators.minLength(1)]],
      tiempo: [null, [Validators.required, Validators.min(1)]],
      pasos: [null, [Validators.required, Validators.min(1)]],
      ingredientes: [null, [Validators.required, Validators.min(1)]],
    });
  }

  aniadirIngrediente(): void {
    const ingrediente = this.nuevoIngrediente?.trim();
    if (ingrediente != null && ingrediente.length > 0) {
      this.ingredientes.push(ingrediente);
      this.nuevoIngrediente = '';
      console.log('Se ha añadido un ingrediente!');
      console.log(this.pasos);
    } else {
      alert('Ingrediente inválido!');
    }
  }

  aniadirPaso(): void {
    const paso = this.pasoNuevo?.trim();
    if (paso != null && paso.length > 0) {
      this.pasos.push(paso);
      this.pasoNuevo = '';
      console.log('Se ha añadido un paso!');
      console.log(this.pasos);
    } else {
      alert('Ingrediente inválido!');
    }
  }

  guardarReceta(): void {
    if (this.recetaForm.valid) {
      this.recetaForm.patchValue({
        ingredientes: this.ingredientes,
        pasos: this.pasos,
      });

      this.pasos = [];
      this.ingredientes = [];
      this.recetaForm.reset();
      console.log('Se ha añadido una receta!');
    } else {
      alert('Revisa los datos!');
    }
  }
}
