import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";
import { EntityExtractionComponent } from './app/components/entity-extraction/entity-extraction.component';
import { TextSimilarityComponent } from './app/components/text-similarity/text-similarity.component';
import { SentimentAnalysisComponent } from './app/components/sentiment-analysis/sentiment-analysis.component';
import { LanguageDetectionComponent } from './app/components/language-detection/language-detection.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './app/components/home/home.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { HistoryComponent } from './app/components/history/history.component';
@NgModule({
  declarations: [
    AppComponent,
    EntityExtractionComponent,
    TextSimilarityComponent,
    SentimentAnalysisComponent,
    LanguageDetectionComponent,
    HomeComponent,
    HistoryComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
