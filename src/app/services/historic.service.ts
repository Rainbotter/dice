import {Injectable} from '@angular/core';
import {RollResultModel} from '../models/roll-result.model';

@Injectable({
    providedIn: 'root'
})
export class HistoricService {

    private historic: RollResultModel[];

    constructor() {
        if (localStorage.getItem('historic')) {
            this.historic = JSON.parse(localStorage.getItem('historic'));
        } else {
            this.historic = [];
        }
    }

    public getHistoric(): RollResultModel[] {
        return this.historic;
    }

    public saveValue(value: RollResultModel): void {
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
