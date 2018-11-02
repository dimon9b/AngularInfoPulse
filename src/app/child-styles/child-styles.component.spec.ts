import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildStylesComponent } from './child-styles.component';

describe('ChildStylesComponent', () => {
  let component: ChildStylesComponent;
  let fixture: ComponentFixture<ChildStylesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildStylesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
