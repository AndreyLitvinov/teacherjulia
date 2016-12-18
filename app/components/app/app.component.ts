import { Component } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';


@Component({
    selector: 'app',
    moduleId: module.id,
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css', 'vendor.css'],
    encapsulation: ViewEncapsulation.Native
})
export class AppComponent {
}