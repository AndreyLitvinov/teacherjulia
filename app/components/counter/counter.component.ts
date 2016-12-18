import { Component } from '@angular/core';

@Component({
    selector: 'counter',
    moduleId: module.id,
    templateUrl: 'counter.component.html',
    styles: ['app.component.css']
})
export class CounterComponent {
    public currentCount = 0;

    public incrementCounter() {
        this.currentCount++;
    }
}