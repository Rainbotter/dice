import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {GeneratorComponent} from './generator/generator.component';
import { HistoricComponent } from './historic/historic.component';

@NgModule({
    declarations: [
        AppComponent,
        GeneratorComponent,
        HistoricComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
