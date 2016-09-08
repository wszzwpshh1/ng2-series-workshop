import {Component} from '@angular/core'

@Component({
    selector: 'note-creater',
    template: require('./note-creater.html'),
    styles: [require('./note-creater.css')]
})

export class NoteCreaterComponent{
    newNote = {
        title: 'title',
        value: 'value'
    }

    createNote() {
        console.log('submit');
    }
}