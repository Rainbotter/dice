import {Component, OnInit} from '@angular/core';
import {HistoricService} from '../services/historic.service';
import {DiceResultModel} from '../models/dice-result.model';

@Component({
    selector: 'app-historic',
    templateUrl: './historic.component.html',
    styleUrls: ['./historic.component.css']
})
export class HistoricComponent implements OnInit {

    public historicOfResult: DiceResultModel[];

    constructor(private historicService: HistoricService) {
        this.historicOfResult = [];
    }

    ngOnInit() {
    }

    public getHistoric(): DiceResultModel[] {
        return this.historicService.getHistoric();
    }

    public cleanHistoric(): void {
        this.historicService.cleanHistoric();
    }

}
