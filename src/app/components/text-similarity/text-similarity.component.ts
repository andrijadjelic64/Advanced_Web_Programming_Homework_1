import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../service/storage.service";
import {TextSimilarityService} from "../../service/text-similarity.service";
import {TextSimilarity} from "../../model/text-similarity";

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {

  text1: string;
  text2: string;
  textSimilarity!: TextSimilarity;
  token!: string;
  constructor(private storageService: StorageService,
              private similarityService: TextSimilarityService) {
    this.text1 = '';
    this.text2 = '';
  }

  ngOnInit(): void {
    this.token = this.storageService.getData('token');
  }

  submit() {
    this.similarityService.getTextSimilarity(this.text1,this.text2,this.token).subscribe(res => {
      this.textSimilarity = res;
    });
  }

}
