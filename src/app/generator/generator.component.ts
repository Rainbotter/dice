import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HistoricService} from "../services/historic.service";

@Component({
    selector: 'app-generator',
    templateUrl: './generator.component.html',
    styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {

    private minValue: number;
    public diceValue: number;
    public selectedDice: number;
    public otherSelected: boolean;
    public defaultDices = [2, 4, 6, 8, 10, 12, 20, 100];

    @ViewChild('collapsible', {static: false}) collapsible: ElementRef;

    constructor(private historicService: HistoricService) {
        this.otherSelected = false;
        this.minValue = 1;
        this.selectedDice = this.defaultDices[0];
    }

    public generateRandomDice(): void {
        this.diceValue = Math.floor(this.minValue + Math.random() * Math.floor(this.selectedDice));
        this.historicService.saveValue(this.diceValue);
    }

    public diceChoosed(value: number): void {
        this.otherSelected = false;
        this.selectedDice = value;
        this.closeCollapsible();
    }

    public selectOther(): void {
        this.otherSelected = true;
    }

    /**
     * Not proud of this
     */
    public closeCollapsible() {
        $('#collapsible').collapse("hide")
    }

    ngOnInit() {
    }

}
