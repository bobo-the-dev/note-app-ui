import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoteLandingComponent } from './note-landing.component';

describe('NoteLandingComponent', () => {
  let component: NoteLandingComponent;
  let fixture: ComponentFixture<NoteLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ NoteLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
