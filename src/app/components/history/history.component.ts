import { Component, OnInit } from '@angular/core';
import {HistoryService} from "../../service/history.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history: string[] = [];

  constructor(private historyService: HistoryService) {

  }

  ngOnInit(): void {
    this.history = this.historyService.getHistory();
    console.log(this.history)
  }



}
