import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsListsComponent } from './comments-lists.component';

describe('CommentsListsComponent', () => {
  let component: CommentsListsComponent;
  let fixture: ComponentFixture<CommentsListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
