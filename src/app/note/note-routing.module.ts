import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NoteLandingComponent } from './note-landing/note-landing.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteDetailResolver } from './resolver/note-detail.resolver';

const routes: Routes = [
  {
    path: '',
    component: NoteLandingComponent,
    children: [
      { path: '', component: NoteListComponent },
      { path: 'new', component: NoteDetailComponent },
      {
        path: ':id/edit',
        component: NoteDetailComponent,
        resolve: {
          noteDetailesolverData: NoteDetailResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoteRoutingModule {}
