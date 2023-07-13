import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPageComponent } from './control-page.component';

describe('ControlPageComponent', () => {
  let component: ControlPageComponent;
  let fixture: ComponentFixture<ControlPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlPageComponent]
    });
    fixture = TestBed.createComponent(ControlPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
