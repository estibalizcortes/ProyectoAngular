import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDavidComponent } from './formulario-david.component';

describe('FormularioDavidComponent', () => {
  let component: FormularioDavidComponent;
  let fixture: ComponentFixture<FormularioDavidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioDavidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioDavidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
