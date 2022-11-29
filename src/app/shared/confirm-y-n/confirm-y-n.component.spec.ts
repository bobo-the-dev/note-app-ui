import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmYNComponent } from './confirm-y-n.component';

describe('ConfirmYNComponent', () => {
  let component: ConfirmYNComponent;
  let fixture: ComponentFixture<ConfirmYNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmYNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmYNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
