import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFegoComponent } from './register-fego.component';

describe('RegisterFegoComponent', () => {
  let component: RegisterFegoComponent;
  let fixture: ComponentFixture<RegisterFegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
