import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPacoComponent } from './formulario-paco.component';

describe('FormularioPacoComponent', () => {
  let component: FormularioPacoComponent;
  let fixture: ComponentFixture<FormularioPacoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioPacoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
