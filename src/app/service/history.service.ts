import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private apiHistory : string[] = [];


  constructor() { }

  addToHistory(url: string, type: string){
    let date: Date = new Date();
    this.apiHistory.push("[ " + date.getDay() + "." + date.getMonth() + "."  + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes()+":" + date.getSeconds() + " ]  " + type + " " + url)
  }

  getHistory(){
    return this.apiHistory
  }
}
