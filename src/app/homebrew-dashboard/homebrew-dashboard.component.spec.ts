import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomebrewDashboardComponent } from './homebrew-dashboard.component';

describe('HomebrewDashboardComponent', () => {
  let component: HomebrewDashboardComponent;
  let fixture: ComponentFixture<HomebrewDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomebrewDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomebrewDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
