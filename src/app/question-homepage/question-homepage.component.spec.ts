import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionHomepageComponent } from './question-homepage.component';

describe('QuestionHomepageComponent', () => {
  let component: QuestionHomepageComponent;
  let fixture: ComponentFixture<QuestionHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
