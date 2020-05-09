import {Injectable} from '@angular/core';
import {DiceResultModel} from '../models/dice-result.model';

@Injectable({
    providedIn: 'root'
})
export class HistoricService {

    private historic: DiceResultModel[];

    constructor() {
        if (localStorage.getItem('historic')) {
            this.historic = JSON.parse(localStorage.getItem('historic'));
        } else {
            this.historic = [];
        }
    }

    public getHistoric(): DiceResultModel[] {
        console.log(this.historic);
        return this.historic;
    }

    public saveValue(value: DiceResultModel): void {
        this.historic.push(value);
        if (this.historic.length > 50) {
            this.historic.shift();
        }

        localStorage.setItem('historic', JSON.stringify(this.historic));
    }

    public cleanHistoric(): void {
        this.historic = [];
        localStorage.removeItem('historic');
    }

}
