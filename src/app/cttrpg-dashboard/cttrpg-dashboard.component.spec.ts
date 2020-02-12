import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CTTRPGDashboardComponent } from './cttrpg-dashboard.component';

describe('CTTRPGDashboardComponent', () => {
  let component: CTTRPGDashboardComponent;
  let fixture: ComponentFixture<CTTRPGDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CTTRPGDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CTTRPGDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
