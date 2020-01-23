import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainVsmComponent } from './main-vsm.component';

describe('MainVsmComponent', () => {
  let component: MainVsmComponent;
  let fixture: ComponentFixture<MainVsmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainVsmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainVsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
