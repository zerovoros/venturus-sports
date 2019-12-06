import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserPage } from './new';

describe('NewUserPage', () => {
  let component: NewUserPage;
  let fixture: ComponentFixture<NewUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUserPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
