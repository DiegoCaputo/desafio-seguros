import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelaSimulacaoComponent } from './parcela-simulacao.component';

describe('ParcelaSimulacaoComponent', () => {
  let component: ParcelaSimulacaoComponent;
  let fixture: ComponentFixture<ParcelaSimulacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParcelaSimulacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelaSimulacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
