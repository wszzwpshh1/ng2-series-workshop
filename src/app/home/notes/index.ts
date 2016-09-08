import {Component} from '@angular/core'
import {NoteCardComponent} from './note-card/index'
import {NoteCreaterComponent} from './note-creater/index'

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
}