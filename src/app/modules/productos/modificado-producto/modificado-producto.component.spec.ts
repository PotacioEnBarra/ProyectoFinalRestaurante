import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificadoProductoComponent } from './modificado-producto.component';

describe('ModificadoProductoComponent', () => {
  let component: ModificadoProductoComponent;
  let fixture: ComponentFixture<ModificadoProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificadoProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificadoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
