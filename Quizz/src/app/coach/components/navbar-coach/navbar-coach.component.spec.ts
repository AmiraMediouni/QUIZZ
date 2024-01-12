import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCoachComponent } from './navbar-coach.component';

describe('NavbarCoachComponent', () => {
  let component: NavbarCoachComponent;
  let fixture: ComponentFixture<NavbarCoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarCoachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
