import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faker } from '@faker-js/faker';
import { first, Subject } from 'rxjs';
import { Note } from '../model/note';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private readonly basedUrl = 'http://localhost:3000/api';
  private readonly noteApiUrl = this.basedUrl + '/notes';

  private notes: Note[] = [];
  public note$ = new Subject<Note[]>();
  public noteMessage$ = new Subject<{ message?: any; err?: any }>();

  constructor(private http: HttpClient) {
    this.fetchAllNotes();
  }

  public createRandomNotes() {
    const numberOfNote = 10;
    for (let index = 0; index < numberOfNote; index++) {
      this.saveNote({
        title: faker.lorem.words(2) + faker.internet.password(4),
        content: faker.lorem.paragraph(),
      })
        .pipe(first())
        .subscribe({
          next: () => {
            this.fetchAllNotes();
            this.noteMessage$.next({
              message: `${numberOfNote} Note(s) has been created`,
            });
          },
          error: (err) => {
            this.noteMessage$.next({
              err,
            });
          },
        });
    }
  }

  public fetchAllNotes() {
    this.http.get<any>(this.noteApiUrl).subscribe({
      next: (res) => {
        this.notes = res.result.slice();
        this.note$.next(this.notes.slice());
      },
      error: (err) => {
        this.noteMessage$.next({
          err,
        });
      },
    });
  }

  public getAllNotes(): Note[] {
    return this.notes.slice();
  }

  public saveNote(noteData: { title: any; content: any }) {
    const { title, content } = noteData;
    return this.http.post<Note>(this.noteApiUrl, {
      title,
      content,
    });
  }

  public updateNote(noteData: { id: any; title: any; content: any }) {
    const { id, title, content } = noteData;
    return this.http.patch<Note>(this.noteApiUrl, {
      id,
      title,
      content,
    });
  }

  public deleteNote(id: number) {
    const deleteNoteUrl = this.noteApiUrl + `/${id}`;
    return this.http.delete<Note>(deleteNoteUrl);
  }

  public deleteAllNotes() {
    return this.http.delete<Note>(this.noteApiUrl);
  }

  public getNoteById(id: number) {
    const targetNoteIndex = this.notes.findIndex((note) => note.id == id);
    if (targetNoteIndex !== -1) {
      return this.notes[targetNoteIndex];
    }
    return null;
  }
}
