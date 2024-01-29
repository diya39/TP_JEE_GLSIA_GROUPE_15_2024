import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetraitClientComponent } from './retrait-client.component';

describe('RetraitClientComponent', () => {
  let component: RetraitClientComponent;
  let fixture: ComponentFixture<RetraitClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RetraitClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RetraitClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
