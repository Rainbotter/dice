import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {RollResultModel} from '../../models/roll-result.model';

@Component({
    selector: 'app-results-modal',
    templateUrl: './results-modal.component.html',
    styleUrls: ['./results-modal.component.css']
})
export class ResultsModalComponent implements OnInit {

    @Input() public rollResult: RollResultModel;

    constructor(public activeModal: NgbActiveModal) {
    }

    public ngOnInit(): void {
    }

}
