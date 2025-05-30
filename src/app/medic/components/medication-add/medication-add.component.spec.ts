import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationAddComponent } from './medication-add.component';

describe('MedicationAddComponent', () => {
  let component: MedicationAddComponent;
  let fixture: ComponentFixture<MedicationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicationAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
