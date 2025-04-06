import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRecetasPageComponent } from './lista-recetas-page.component';

describe('ListaRecetasPageComponent', () => {
  let component: ListaRecetasPageComponent;
  let fixture: ComponentFixture<ListaRecetasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaRecetasPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaRecetasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
