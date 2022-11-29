import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Note } from '../model/note';
import { NoteService } from '../service/note.service';

@Injectable({
  providedIn: 'root'
})
export class NoteDetailResolver implements Resolve<Note | null> {
  constructor(
    private noteService: NoteService
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<Note> | null {
    const id = route.params['id']
    const note = this.noteService.getNoteById(id);
    return note ? of(note) : null;
  }
}
