import {Component} from "@angular/core";
import {HomeComponent} from './home';

@Component({
    selector: 'app',
    template: require('./app.html'),
    directives: [HomeComponent]
})

export class App{

}

