import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'fetchdata',
    moduleId: module.id,
    templateUrl: 'fetchdata.component.html'
})
export class FetchDataComponent {
    public forecasts: WeatherForecast[];

    constructor(http: Http) {
        http.get('http://localhost:50979/api/Values/').subscribe(result => {
            this.forecasts = result.json();
        });
    }
}

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}
