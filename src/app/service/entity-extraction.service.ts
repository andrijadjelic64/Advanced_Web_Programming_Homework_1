import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Entity} from "../model/entity";

@Injectable({
  providedIn: 'root'
})
export class EntityExtractionService {

  private apiUrl = environment.postApi
  private readonly entityUrl = this.apiUrl + '/datatxt/nex/v1';

  constructor(private httpClient: HttpClient) {
  }



  getEntities(text: string,atributes: string[] ,min_confidence: number, token: string): Observable<Entity> {
    return this.httpClient.get<Entity>(`${this.entityUrl}/?include=${atributes}&text=${text}&min_confidence=${min_confidence}&country=-1&token=${token}`);
  }
}
