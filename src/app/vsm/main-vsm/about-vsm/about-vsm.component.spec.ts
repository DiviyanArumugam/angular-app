import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutVsmComponent } from './about-vsm.component';

describe('AboutVsmComponent', () => {
  let component: AboutVsmComponent;
  let fixture: ComponentFixture<AboutVsmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutVsmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutVsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
