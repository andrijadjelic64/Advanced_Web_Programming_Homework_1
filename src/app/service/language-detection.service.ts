import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LanguageDetection} from "../model/language-detection";

@Injectable({
  providedIn: 'root'
})
export class LanguageDetectionService {

  private apiUrl = environment.postApi
  private readonly entityUrl = this.apiUrl + '/datatxt/li/v1';

  constructor(private httpClient: HttpClient) { }

  getLanguageDetection(text: string, clean:boolean, token: string): Observable<LanguageDetection> {
    return this.httpClient.get<LanguageDetection>(`${this.entityUrl}/?text=${text}&clean=${clean}&token=${token}`);  }
}
