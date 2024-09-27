import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KtvComponent } from './ktv.component';

describe('KtvComponent', () => {
  let component: KtvComponent;
  let fixture: ComponentFixture<KtvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KtvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KtvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
