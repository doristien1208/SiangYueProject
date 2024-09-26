import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceflowComponent } from './serviceflow.component';

describe('ServiceflowComponent', () => {
  let component: ServiceflowComponent;
  let fixture: ComponentFixture<ServiceflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceflowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
