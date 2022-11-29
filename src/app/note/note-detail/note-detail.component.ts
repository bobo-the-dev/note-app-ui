import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { Note } from '../model/note';
import { NoteService } from '../service/note.service';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss'],
})
export class NoteDetailComponent implements OnInit {
  private newMode = true;
  public id = -1;
  public editingNoteId = -1;

  public message = '';
  public messageError = false;

  public confirmMessage = '';

  noteDetailForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private noteService: NoteService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ noteDetailesolverData }) => {
      const noteDetail: Note = noteDetailesolverData;
      if (noteDetail) {
        // Edit Note
        this.newMode = false;
        this.id = noteDetail.id;
        this.noteDetailForm.setValue({
          title: noteDetail.title,
          content: noteDetail.content,
        });
      } else {
        // New Note
        this.newMode = true;
      }
    });
  }

  onSave() {
    if (!this.id) {
      return;
    }
    if (this.newMode) {
      this.confirmMessage = `Are you sure you want to save?`;
    } else {
      this.editingNoteId = this.id;
      this.confirmMessage = `Are you sure you want to update (id = ${this.editingNoteId})?`;
    }
  }

  onConfirmCallback(callbackValue: any) {
    const title = this.noteDetailForm.get('title')?.value;
    const content = this.noteDetailForm.get('content')?.value;
    if (callbackValue) {
      if (this.newMode) {
        this.noteService
          .saveNote({
            title,
            content,
          })
          .pipe(first())
          .subscribe({
            next: (res) => {
              this.noteService.fetchAllNotes();
              this.onBack();
            },
            error: (err) => {
              this.onShowErrorMessage(err.error.message || err.message);
            },
          });
      } else {
        this.noteService
          .updateNote({
            id: this.editingNoteId,
            title,
            content,
          })
          .pipe(first())
          .subscribe({
            next: (res) => {
              this.noteService.fetchAllNotes();
              this.onBack();
            },
            error: (err) => {
              this.onShowErrorMessage(err.error.message || err.message);
            },
          });
      }
    } else {
      // do nothing
    }
    this.editingNoteId = -1;
    this.confirmMessage = '';
  }

  onCancel() {
    this.onBack();
  }

  onBack() {
    this.router.navigate(['/notes']);
  }

  onShowSuccessMessage(message: string) {
    this.message = message;
    this.messageError = false;
  }

  onShowErrorMessage(message: string) {
    this.message = message;
    this.messageError = true;
  }
}
