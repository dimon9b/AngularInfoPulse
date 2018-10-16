import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowTitleComponent } from './yellow-title.component';

describe('YellowTitleComponent', () => {
  let component: YellowTitleComponent;
  let fixture: ComponentFixture<YellowTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YellowTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YellowTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
