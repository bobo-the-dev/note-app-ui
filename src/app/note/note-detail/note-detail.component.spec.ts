import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule,} from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoteDetailComponent } from './note-detail.component';
import { ConfirmYNComponent } from 'src/app/shared/confirm-y-n/confirm-y-n.component';
import { MessageComponent } from 'src/app/shared/message/message.component';

describe('NoteDetailComponent', () => {
  let component: NoteDetailComponent;
  let fixture: ComponentFixture<NoteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule],
      declarations: [ NoteDetailComponent, ConfirmYNComponent, MessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
