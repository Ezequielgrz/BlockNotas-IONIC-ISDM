import { Component } from '@angular/core';
import { NoteService } from '../services/note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  notes: any[] = [];

  constructor(private noteService: NoteService, private router: Router) {}

  ionViewWillEnter() {
    this.notes = this.noteService.getNotes();
  }

  deleteNote(id: string) {
    this.noteService.deleteNoteById(id);
    this.ionViewWillEnter();
  }

  viewNoteDetail(id: string) {
    this.router.navigate(['/note-detail', { id }]);
  }
  alertButtons = ['Action'];
}
