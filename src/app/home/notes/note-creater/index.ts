import {Component, Output, EventEmitter} from '@angular/core'
import {isEmpty} from 'lodash'
import {ColorPickerComponent} from './color-picker'

@Component({
    selector: 'note-creater',
    template: require('./note-creater.html'),
    styles: [require('./note-creater.css')],
    directives: [ColorPickerComponent]
})

export class NoteCreaterComponent{
    @Output() onCreateNote = new EventEmitter();
    newNote = {
        title: 'title',
        value: 'value',
        color: 'rgb(255, 255, 255)'
    };
    isFocus:boolean = false;


    clearNewNote() {
        this.newNote = {title: '', value: '', color: 'rgb(255, 255, 255)'};
    };

    createNote() {
        //pass the value, not the reference
        const {title, value, color} = this.newNote;

        if(isEmpty(title) || isEmpty(value)) {
            return false;
        }

        this.onCreateNote.emit({title, value, color});
        this.clearNewNote();

        //return false to prevent the page jumping
        return false;
    };

    expand() {
        this.isFocus = true;
    };

    // test() {
    //     this.isFocus = false;
    // }

    changeColor(color) {
        this.newNote.color = color;
        console.log(this.newNote.color);
    }

    close() {
        this.isFocus = false;
    }
}