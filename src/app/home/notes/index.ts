import {Component} from '@angular/core'
import {NoteCardComponent} from './note-card'

@Component({
    selector: 'notes',
    template: require('./notes.html'),
    styles: [require('./notes.css')],
    directives: [NoteCardComponent]
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
}