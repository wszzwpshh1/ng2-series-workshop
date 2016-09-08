import {Component, Output, EventEmitter} from '@angular/core'
import {isEmpty} from 'lodash'

@Component({
    selector: 'note-creater',
    template: require('./note-creater.html'),
    styles: [require('./note-creater.css')]
})

export class NoteCreaterComponent{
    @Output() onCreateNote = new EventEmitter();
    newNote = {
        title: 'title',
        value: 'value'
    };
    isFocus:boolean = false;


    clearNewNote() {
        this.newNote = {title: '', value: ''};
    };

    createNote() {
        //pass the value, not the reference
        const {title, value} = this.newNote;

        if(isEmpty(title) || isEmpty(value)) {
            return false;
        }

        this.onCreateNote.emit({title, value});
        this.clearNewNote();

        //return false to prevent the page jumping
        return false;
    };

    expand() {
        this.isFocus = true;
    };

    test() {
        this.isFocus = false;
    }
}