import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterVsmComponent } from './register-vsm.component';

describe('RegisterVsmComponent', () => {
  let component: RegisterVsmComponent;
  let fixture: ComponentFixture<RegisterVsmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterVsmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterVsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
