import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Receta } from '../models/receta';

@Injectable({
  providedIn: 'root',
})
export class RecetaService {
  public apiURL = 'http://localhost:3000/recetas';

  constructor(private http: HttpClient) {}

  getRecetas(): Observable<Receta[]> {
    return this.http.get<Receta[]>(this.apiURL);
  }

  getRecetasPorID(id: number): Observable<Receta> {
    return this.http.get<Receta>(`${this.apiURL}/${id}`);
  }

  crearReceta(receta: Receta): Observable<Receta> {
    return this.http.post<Receta>(this.apiURL, receta);
  }

  actualizarReceta(receta: Receta): Observable<Receta> {
    return this.http.put<Receta>(`${this.apiURL}/${receta.id}`, receta);
  }

  eliminarReceta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }

  getRecetasFavoritas(receta: Receta): Observable<Receta[]> {
    return this.http.get<Receta[]>(`${this.apiURL}?esFavorito=true`);
  }
}
