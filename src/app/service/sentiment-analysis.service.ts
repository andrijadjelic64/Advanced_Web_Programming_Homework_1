import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {SentimentAnalyis} from "../model/sentiment-analyis";

@Injectable({
  providedIn: 'root'
})
export class SentimentAnalysisService {

  private apiUrl = environment.postApi
  private readonly entityUrl = this.apiUrl + '/datatxt/sent/v1';

  constructor(private httpClient: HttpClient) { }

  getSentimentAnalyis(text: string, optional:string, token: string): Observable<SentimentAnalyis> {
    return this.httpClient.get<SentimentAnalyis>(`${this.entityUrl}/?text=${text}&clean=${optional}&token=${token}`);  }
}
