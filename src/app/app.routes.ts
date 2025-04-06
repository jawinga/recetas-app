import { Routes, RouterModule } from '@angular/router';
import { DetalleRecetaComponent } from './pages/detalle-receta/detalle-receta.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListaRecetasComponent } from './pages/lista-recetas/lista-recetas.component';
import { ListaRecetasPageComponent } from './pages/lista-recetas-page/lista-recetas-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'lista-recetas-page', component: ListaRecetasPageComponent },
  { path: 'detalle-receta/:id', component: DetalleRecetaComponent },
  { path: '**', redirectTo: '/home' },
];
