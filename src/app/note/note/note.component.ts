import { Component, Input, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { ConfirmYNComponent } from 'src/app/shared/confirm-y-n/confirm-y-n.component';
import { Note } from '../model/note';
import { NoteService } from '../service/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent {
  @Input() note: Note | undefined;

  public deletingNoteId = -1;
  public message = '';

  constructor(private noteService: NoteService) {}

  onDelete(id?: number) {
    if (!id) {
      return;
    }
    this.deletingNoteId = id;
    this.message = `Are you sure you want to delete (id = ${this.deletingNoteId})?`;
  }

  onConfirmCallback(callbackValue: any) {
    if (callbackValue) {
      this.noteService
        .deleteNote(this.deletingNoteId)
        .pipe(first())
        .subscribe({
          next: () => {
            this.noteService.fetchAllNotes();
          },
          error: (err) => {},
        });
    } else {
      // do nothing
    }
    this.deletingNoteId = -1;
    this.message = '';
  }
}
