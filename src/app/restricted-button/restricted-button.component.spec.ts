import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictedButtonComponent } from './restricted-button.component';

describe('RestrictedButtonComponent', () => {
  let component: RestrictedButtonComponent;
  let fixture: ComponentFixture<RestrictedButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestrictedButtonComponent]
    });
    fixture = TestBed.createComponent(RestrictedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
