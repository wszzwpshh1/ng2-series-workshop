import {Component} from '@angular/core'
import {NoteCardComponent} from './note-card'
import {NoteCreaterComponent} from './note-creater'

@Component({
    selector: 'notes',
    template: require('./notes.html'),
    styles: [require('./notes.css')],
    directives: [NoteCardComponent, NoteCreaterComponent]
})

export class NotesComponent{
    notes = [
        {
            title: 'title1',
            value: 'value1'
        },
        {
            title: 'title2',
            value: 'value2'
        },
        {
            title: 'title3',
            value: 'value3'
        }
    ]

    checkCard(note, i) {
        this.notes.splice(i, 1);
    }

    addNote(note) {
        this.notes.push(note);
    }
}