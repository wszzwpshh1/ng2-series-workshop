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
            title: 'title',
            value: 'value'
        },
        {
            title: 'title2',
            value: 'value'
        }
    ];

}