import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotClientComponent } from './depot-client.component';

describe('DepotClientComponent', () => {
  let component: DepotClientComponent;
  let fixture: ComponentFixture<DepotClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepotClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepotClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
