import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteLandingComponent } from './note-landing/note-landing.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NoteRoutingModule } from './note-routing.module';
import { NoteComponent } from './note/note.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    NoteListComponent,
    NoteLandingComponent,
    NoteDetailComponent,
    NoteComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NoteRoutingModule,
    SharedModule,
  ],
})
export class NoteModule {}
