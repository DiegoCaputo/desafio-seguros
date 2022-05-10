import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoberturaSimulacaoComponent } from './cobertura-simulacao.component';

describe('CoberturaSimulacaoComponent', () => {
  let component: CoberturaSimulacaoComponent;
  let fixture: ComponentFixture<CoberturaSimulacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoberturaSimulacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoberturaSimulacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
