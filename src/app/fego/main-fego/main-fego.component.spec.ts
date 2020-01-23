import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFegoComponent } from './main-fego.component';

describe('MainFegoComponent', () => {
  let component: MainFegoComponent;
  let fixture: ComponentFixture<MainFegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainFegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
