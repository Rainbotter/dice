import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {GeneratorComponent} from './generator/generator.component';
import {HistoricComponent} from './historic/historic.component';
import {FormsModule} from '@angular/forms';
import {ResultsModalComponent} from './historic/results-modal/results-modal.component';

@NgModule({
    declarations: [
        AppComponent,
        GeneratorComponent,
        HistoricComponent,
        ResultsModalComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        NgbModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [ResultsModalComponent]
})
export class AppModule {
}
