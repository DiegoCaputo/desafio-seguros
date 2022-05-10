import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheCoberturaComponent } from './detalhe-cobertura.component';

describe('DetalheCoberturaComponent', () => {
  let component: DetalheCoberturaComponent;
  let fixture: ComponentFixture<DetalheCoberturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheCoberturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheCoberturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
