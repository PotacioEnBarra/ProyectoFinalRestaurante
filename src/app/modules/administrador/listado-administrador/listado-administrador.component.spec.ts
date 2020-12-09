import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAdministradorComponent } from './listado-administrador.component';

describe('ListadoAdministradorComponent', () => {
  let component: ListadoAdministradorComponent;
  let fixture: ComponentFixture<ListadoAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
