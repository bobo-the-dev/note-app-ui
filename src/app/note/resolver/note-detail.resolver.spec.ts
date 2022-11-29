import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoteDetailResolver } from './note-detail.resolver';

describe('NoteDetailResolver', () => {
  let resolver: NoteDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
    });
    resolver = TestBed.inject(NoteDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
