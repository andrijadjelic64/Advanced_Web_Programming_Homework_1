import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../service/storage.service";
import {SentimentAnalyis} from "../../model/sentiment-analyis";
import {SentimentAnalysisService} from "../../service/sentiment-analysis.service";

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  text: string;
  lang:string;
  token!: string;
  sentimentAnalyis!:SentimentAnalyis;
  constructor(private storageService: StorageService,
              private sentimentService: SentimentAnalysisService) {
    this.text='';
    this.lang='';
  }
  ngOnInit(): void {
    this.token = this.storageService.getData('token');

  }
  submit() {
    this.sentimentService.getSentimentAnalyis(this.text,this.lang,this.token).subscribe(res => {
      this.sentimentAnalyis = res;
    });

  }
}


