import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntityExtractionComponent } from './app/components/entity-extraction/entity-extraction.component';
import {TextSimilarityComponent} from "./app/components/text-similarity/text-similarity.component";
import {LanguageDetectionComponent} from "./app/components/language-detection/language-detection.component";
import {SentimentAnalysisComponent} from "./app/components/sentiment-analysis/sentiment-analysis.component";
import {HomeComponent} from "./app/components/home/home.component";
import {HistoryComponent} from "./app/components/history/history.component";


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "entity-extraction",
    component: EntityExtractionComponent
  },
  {
    path: "text-similarity",
    component: TextSimilarityComponent,
  },
  {
    path: "language-detection",
    component: LanguageDetectionComponent,
  },
  {
    path: "sentiment-analysis",
    component: SentimentAnalysisComponent,
  },
  {
    path: "history",
    component: HistoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
