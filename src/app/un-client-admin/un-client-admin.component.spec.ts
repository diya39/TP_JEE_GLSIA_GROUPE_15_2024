import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnClientAdminComponent } from './un-client-admin.component';

describe('UnClientAdminComponent', () => {
  let component: UnClientAdminComponent;
  let fixture: ComponentFixture<UnClientAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnClientAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnClientAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
