import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'note-card',
    template: require('./note-card.html'),
    styles: [require('./note-card.css')]
})

export class NoteCardComponent{
    @Input() note
    @Input() i
    @Output() checked = new EventEmitter();


    onChecked() {
        console.log(this.i);
        this.checked.emit(this.note);
    }
}