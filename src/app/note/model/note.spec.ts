import { Note } from './note';

describe('Note', () => {
  it('should create an instance', () => {
    expect(new Note(1, '', '', new Date(), new Date())).toBeTruthy();
  });
});
