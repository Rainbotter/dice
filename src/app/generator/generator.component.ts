import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HistoricService} from '../services/historic.service';
import {DiceResultModel} from '../models/dice-result.model';

declare var $: any;

@Component({
    selector: 'app-generator',
    templateUrl: './generator.component.html',
    styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {

    private minValue: number;
    public diceValue: DiceResultModel;
    public selectedDice: number;
    public selectedNumberOfDice: number;
    public otherSelected: boolean;
    public otherNumberOfDiceSelected: boolean;
    public defaultDices = [2, 4, 6, 8, 10, 12, 20, 100];
    public defaultNumberOfDices = [1, 2, 3, 4, 5, 8, 10, 100];

    @ViewChild('collapsible', {static: false}) collapsible: ElementRef;

    constructor(private historicService: HistoricService) {
        this.otherSelected = false;
        this.otherNumberOfDiceSelected = false;
        this.minValue = 1;
        this.selectedDice = this.defaultDices[0];
        this.selectedNumberOfDice = this.defaultNumberOfDices[0];
    }

    public generateRandomDice(): void {
        const minValue = Math.floor(this.minValue * this.selectedNumberOfDice);
        const maxValue = Math.floor(this.selectedDice * this.selectedNumberOfDice);
        let result = 0;
        for (let i = 0; i < this.selectedNumberOfDice; i++) {
            const r = Math.floor(this.minValue + Math.random() * Math.floor(this.selectedDice));
            result += r;
        }

        const diceRoll: DiceResultModel = {minValue, maxValue, result};
        this.diceValue = diceRoll;
        this.historicService.saveValue(diceRoll);
    }

    public diceChoosed(value: number): void {
        this.otherSelected = false;
        this.selectedDice = value;
        this.closeCollapsible();
    }

    public numberOfDiceChoosed(value: number): void {
        this.otherNumberOfDiceSelected = false;
        this.selectedNumberOfDice = value;
        this.closeCollapsible();
    }

    public selectOther(): void {
        this.otherSelected = true;
    }

    public selectOtherNumberOfDice(): void {
        this.otherNumberOfDiceSelected = true;
    }

    /**
     * Not proud of this
     */
    public closeCollapsible() {
        $('#collapsible').collapse('hide');
    }

    /**
     * Not proud of this
     */
    public closeCollapsible2() {
        $('#collapsible2').collapse('hide');
    }

    ngOnInit() {
    }

}
