import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaAdmissaoCooperadoComponent } from './nova-admissao-cooperado.component';

describe('NovaAdmissaoCooperadoComponent', () => {
  let component: NovaAdmissaoCooperadoComponent;
  let fixture: ComponentFixture<NovaAdmissaoCooperadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaAdmissaoCooperadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovaAdmissaoCooperadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
