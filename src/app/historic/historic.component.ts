import {Component, OnInit} from '@angular/core';
import {HistoricService} from "../services/historic.service";

@Component({
    selector: 'app-historic',
    templateUrl: './historic.component.html',
    styleUrls: ['./historic.component.css']
})
export class HistoricComponent implements OnInit {

    public historicOfResult: number[];

    constructor(private historicService: HistoricService) {
        this.historicOfResult = [];
    }

    ngOnInit() {
    }

    public getHistoric(): string[] {
        return this.historicService.getHistoric();
    }

    public cleanHistoric(): void {
        this.historicService.cleanHistoric();
    }

}
