import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEstibalizComponent } from './formulario-estibaliz.component';

describe('FormularioEstibalizComponent', () => {
  let component: FormularioEstibalizComponent;
  let fixture: ComponentFixture<FormularioEstibalizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioEstibalizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioEstibalizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
