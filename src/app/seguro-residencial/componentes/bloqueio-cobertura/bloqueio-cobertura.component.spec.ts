import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueioCoberturaComponent } from './bloqueio-cobertura.component';

describe('BloqueioCoberturaComponent', () => {
  let component: BloqueioCoberturaComponent;
  let fixture: ComponentFixture<BloqueioCoberturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloqueioCoberturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloqueioCoberturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
