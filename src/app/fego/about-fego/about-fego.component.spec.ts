import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFegoComponent } from './about-fego.component';

describe('AboutFegoComponent', () => {
  let component: AboutFegoComponent;
  let fixture: ComponentFixture<AboutFegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutFegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutFegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
