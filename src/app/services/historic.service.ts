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
        if(this.historic.length > 50){
            this.historic.shift();
        }
        localStorage.setItem('historic', this.historic.toString());
    }

    public cleanHistoric(): void {
        this.historic = [];
        localStorage.removeItem('historic');
    }

}
