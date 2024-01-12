import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListQuizzComponent } from './list-quizz.component';

describe('ListQuizzComponent', () => {
  let component: ListQuizzComponent;
  let fixture: ComponentFixture<ListQuizzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListQuizzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListQuizzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
