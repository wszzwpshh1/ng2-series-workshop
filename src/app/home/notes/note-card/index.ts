import {Component} from '@angular/core'
import {Input} from '@angular/core'

@Component({
    selector: 'note-card',
    template: require('./note-card.html'),
    styles: [require('./note-card.css')]
})

export class NoteCardComponent{
    //note = {
    //    title: 'title',
    //    value: 'value'
    //}
    @Input() note

    onChecked(){
        console.log('click');
    }
}