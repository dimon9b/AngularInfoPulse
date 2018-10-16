import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortAlgoritmComponent } from './sort-algoritm.component';

describe('SortAlgoritmComponent', () => {
  let component: SortAlgoritmComponent;
  let fixture: ComponentFixture<SortAlgoritmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortAlgoritmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortAlgoritmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
