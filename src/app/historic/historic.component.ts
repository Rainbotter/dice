import {Component, OnInit} from '@angular/core';
import {HistoricService} from '../services/historic.service';
import {RollResultModel} from '../models/roll-result.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ResultsModalComponent} from './results-modal/results-modal.component';

@Component({
    selector: 'app-historic',
    templateUrl: './historic.component.html',
    styleUrls: ['./historic.component.css']
})
export class HistoricComponent implements OnInit {

    public historicOfResult: RollResultModel[];

    constructor(private historicService: HistoricService,
                private modalService: NgbModal) {
        this.historicOfResult = [];
    }

    public ngOnInit(): void {
    }

    public getHistoric(): RollResultModel[] {
        return this.historicService.getHistoric();
    }

    public cleanHistoric(): void {
        this.historicService.cleanHistoric();
    }

    public open(rollResult: RollResultModel): void {
        const modalRef = this.modalService.open(ResultsModalComponent);
        modalRef.componentInstance.rollResult = rollResult;
    }

}
