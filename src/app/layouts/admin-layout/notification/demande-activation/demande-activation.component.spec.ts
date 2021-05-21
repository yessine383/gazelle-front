import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeActivationComponent } from './demande-activation.component';

describe('DemandeActivationComponent', () => {
  let component: DemandeActivationComponent;
  let fixture: ComponentFixture<DemandeActivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeActivationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
