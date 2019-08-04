import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HistoricService {

    private historic: string[];

    constructor() {
        if (localStorage.getItem('historic')) {
            this.historic = localStorage.getItem('historic').split(',');
        } else {
            this.historic = [];
        }
    }

    public getHistoric(): string[] {
        return this.historic;
    }

    public saveValue(value: number, dice: number): void {
        this.historic.push(value + " / " + dice);
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
