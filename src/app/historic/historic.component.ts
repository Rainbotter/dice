import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-historic',
    templateUrl: './historic.component.html',
    styleUrls: ['./historic.component.css']
})
export class HistoricComponent implements OnInit {

    public historicOfResult: number[];

    constructor() {
        this.historicOfResult = [];
    }

    ngOnInit() {
    }

}