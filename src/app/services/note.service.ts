import { Injectable } from '@angular/core';


export interface Note {
  id: string;
  title: string;
  text: string;
  date: Date;  
}
@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notes: any[] = [];

  getNotes(): any[] {
    return this.notes;
  }

  addNote(note: any) {
    note.id = this.generateUniqueId();
    note.date = new Date();
    this.notes.push(note);
  }

  getNoteById(id: string): any {
    const note = this.notes.find((n) => n.id === id);
    return note ? note : null;
  }

  deleteNoteById(id: string) {
    this.notes = this.notes.filter((note) => note.id !== id);
  }

  public generateUniqueId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  isNoteValid(note: Note): boolean {
    return note.title.trim() !== '' && note.text.trim() !== '';
  }

  constructor() { } 
}
