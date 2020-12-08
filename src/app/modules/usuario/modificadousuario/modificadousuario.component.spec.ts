import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificadousuarioComponent } from './modificadousuario.component';

describe('ModificadousuarioComponent', () => {
  let component: ModificadousuarioComponent;
  let fixture: ComponentFixture<ModificadousuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificadousuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificadousuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
