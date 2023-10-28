import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandComponentComponent } from './hand-component.component';

describe('HandComponentComponent', () => {
  let component: HandComponentComponent;
  let fixture: ComponentFixture<HandComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HandComponentComponent]
    });
    fixture = TestBed.createComponent(HandComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
