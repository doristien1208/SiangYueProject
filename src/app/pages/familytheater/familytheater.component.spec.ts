import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilytheaterComponent } from './familytheater.component';

describe('FamilytheaterComponent', () => {
  let component: FamilytheaterComponent;
  let fixture: ComponentFixture<FamilytheaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamilytheaterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FamilytheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
