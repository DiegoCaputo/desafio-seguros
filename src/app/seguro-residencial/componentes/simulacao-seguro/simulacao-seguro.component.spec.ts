import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulacaoSeguroComponent } from './simulacao-seguro.component';

describe('SimulacaoSeguroComponent', () => {
  let component: SimulacaoSeguroComponent;
  let fixture: ComponentFixture<SimulacaoSeguroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulacaoSeguroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulacaoSeguroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
