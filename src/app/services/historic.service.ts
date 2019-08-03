import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HistoricService {

    private historic: number[];

    constructor() {
        if (localStorage.getItem('historic')) {
            this.historic = localStorage.getItem('historic').split(',').map(function (item) {
                return parseInt(item, 10);
            });
        } else {
            this.historic = [];
        }
    }

    public getHistoric(): number[] {
        return this.historic;
    }

    public saveValue(value: number): void {
        this.historic.push(value);
        localStorage.setItem('historic', this.historic.toString());
        console.log(localStorage.getItem('historic'));
    }

    public cleanHistoric(): void {
        this.historic = [];
        localStorage.removeItem('historic');
    }

}
