import { Component } from '@angular/core';
import { NoteService } from '../services/note.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  newNoteTitle: string = '';
  newNoteText: string = '';

  constructor(private noteService: NoteService, private router: Router) {}

  createNote() {
    if (this.newNoteTitle.trim() !== '' && this.newNoteText.trim() !== '') {
      this.noteService.addNote({
        title: this.newNoteTitle,
        text: this.newNoteText
      });
      this.newNoteTitle = '';
      this.newNoteText = '';
    }
  }
  goToTab1() {
    this.router.navigate(['tabs']);
  }

}
