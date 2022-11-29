import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first, Observable, Subscription } from 'rxjs';
import { Note } from '../model/note';
import { NoteService } from '../service/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
})
export class NoteListComponent implements OnInit {
  public message = '';
  public messageError = false;

  notes: Note[] = [];
  note$: Subscription = new Subscription();
  noteMessage$: Subscription = new Subscription();
  constructor(private router: Router, private noteService: NoteService) {}

  ngOnInit() {
    this.notes = this.noteService.getAllNotes();
    this.note$ = this.noteService.note$.subscribe((notes: Note[]) => {
      this.notes = notes;
    });
    this.noteMessage$ = this.noteService.noteMessage$.subscribe((res) => {
      const { message, err } = res;
      if (err) {
        this.onShowErrorMessage(err.error.message || err.message);
      } else {
        this.onShowSuccessMessage(message);
      }
    });
  }

  onNewNote() {
    this.router.navigate(['/notes/new']);
  }

  onRandomNote() {
    this.noteService.createRandomNotes();
  }

  onDeleteAllNotes() {
    if (!this.notes.length) {
      return;
    }
    this.noteService
      .deleteAllNotes()
      .pipe(first())
      .subscribe({
        next: () => {
          this.onShowSuccessMessage('All notes has been deleted!');
          this.noteService.fetchAllNotes();
        },
        error: (err) => {
          this.onShowErrorMessage(err.error.message || err.message);
        },
      });
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
