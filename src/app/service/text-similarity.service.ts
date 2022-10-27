import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {TextSimilarity} from "../model/text-similarity";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TextSimilarityService {

  private apiUrl = environment.postApi
  private readonly entityUrl = this.apiUrl + '/datatxt/sim/v1';
  constructor(private httpClient: HttpClient) { }

  getTextSimilarity(text1: string,text2: string, token:string): Observable<TextSimilarity> {
    return this.httpClient.get<TextSimilarity>(`${this.entityUrl}/?text1=${text1}&text2=${text2}&token=${token}`);
  }
}
