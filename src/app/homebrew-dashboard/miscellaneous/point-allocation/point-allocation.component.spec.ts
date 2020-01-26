import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointAllocationComponent } from './point-allocation.component';

describe('PointAllocationComponent', () => {
  let component: PointAllocationComponent;
  let fixture: ComponentFixture<PointAllocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointAllocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
