import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {SentimentAnalyis} from "../model/sentiment-analyis";
import {HistoryService} from "./history.service";

@Injectable({
  providedIn: 'root'
})
export class SentimentAnalysisService {

  private apiUrl = environment.postApi
  private readonly entityUrl = this.apiUrl + '/datatxt/sent/v1';

  constructor(private httpClient: HttpClient,
              private historyService:HistoryService) { }

  getSentimentAnalyis(text: string, optional:string, token: string): Observable<SentimentAnalyis> {
    this.historyService.addToHistory(`${this.entityUrl}/?lang=${optional}&text=${text}&token=${token}`,'GET')
  return this.httpClient.get<SentimentAnalyis>(`${this.entityUrl}/?lang=${optional}&text=${text}&token=${token}`);
  }
}
