import {Component} from '@angular/core'
import {AppBarComponent} from './app-bar'
import {NotesComponent} from './notes'


@Component({
    selector: 'home',
    template: require('./home.html'),
    directives: [AppBarComponent, NotesComponent]
})

export class HomeComponent{

}