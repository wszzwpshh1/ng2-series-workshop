import {Component, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'color-picker',
    template: require('./color-picker.html'),
    styles: [require('./color-picker.css')]
})

export class ColorPickerComponent{
    @Output() onChangeColor = new EventEmitter();

    colors = [
        'rgb(255, 138, 128)',
        'rgb(255, 209, 128)',
        'rgb(255, 255, 141)',
        'rgb(207, 216, 220)',
        'rgb(128, 216, 255)',
        'rgb(167, 255, 235)',
        'rgb(204, 255, 144)',
        'rgb(198, 50, 198)'
    ];
    isVisible:boolean = false;

    togglePicker() {
        this.isVisible = !this.isVisible;
    };

    pickColor(color) {
        this.onChangeColor.emit(color);
        this.isVisible = false;
    };

}