import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HintComponentComponent } from './hint-component.component';

describe('HintComponentComponent', () => {
  let component: HintComponentComponent;
  let fixture: ComponentFixture<HintComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HintComponentComponent]
    });
    fixture = TestBed.createComponent(HintComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
