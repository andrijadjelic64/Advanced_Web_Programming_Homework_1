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
  sentimentAnalysis!:SentimentAnalyis;

  red:number=0;
  green:number=0;
  blue:number=0;

  colorHex:string;

  constructor(private storageService: StorageService,
              private sentimentService: SentimentAnalysisService) {
    this.text='';
    this.lang='';
    this.colorHex='';
  }
  ngOnInit(): void {
    this.token = this.storageService.getData('token');

  }
  submit() {
    this.sentimentService.getSentimentAnalyis(this.text,this.lang,this.token).subscribe(res => {
      this.sentimentAnalysis = res;
      this.getColor();
    });

  }

  getColor(){
    this.red = Math.round(255-(10+(this.sentimentAnalysis.sentiment.score*10))*(255/21));
    this.green = Math.round((10 + (this.sentimentAnalysis.sentiment.score * 10)) * (255 / 21));
    this.blue = 0;
    console.log(this.red)
    console.log(this.green)
    this.colorHex = this.rgbToHex(this.red, this.green, 0)
  }

  rgbToHex(r:number, g:number, b:number) {

    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }
  componentToHex(n: number) {
    var hex = n.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
}


