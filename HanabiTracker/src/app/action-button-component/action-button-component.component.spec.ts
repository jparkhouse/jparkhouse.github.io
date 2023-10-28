import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonComponentComponent } from './action-button-component.component';

describe('ActionButtonComponentComponent', () => {
  let component: ActionButtonComponentComponent;
  let fixture: ComponentFixture<ActionButtonComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionButtonComponentComponent]
    });
    fixture = TestBed.createComponent(ActionButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
