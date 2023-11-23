import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService, Note } from 'src/app/services/note.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.page.html',
  styleUrls: ['./note-detail.page.scss'],
})
export class NoteDetailPage implements OnInit {

  noteId: string = '';
  note: any;

  constructor(private route: ActivatedRoute, private noteService: NoteService, private alertController: AlertController) { }

  ngOnInit() {
    const noteId = this.route.snapshot.paramMap.get('id') ?? '';
    this.note = this.noteService.getNoteById(noteId);

    if (!this.note) {
      console.error(`No se encontró la nota con ID ${this.noteId}`);
    }
  }

}
