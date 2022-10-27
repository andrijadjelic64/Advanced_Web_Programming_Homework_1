import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../service/storage.service";
import {LanguageDetectionService} from "../../service/language-detection.service";
import {LanguageDetection} from "../../model/language-detection";

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent implements OnInit {

  text: string;
  clean:boolean;
  token!: string;
  languageDetection!:LanguageDetection;
  constructor(private storageService: StorageService,
              private languageService: LanguageDetectionService) {
    this.text='';
    this.clean=false;
  }

  ngOnInit(): void {
    this.token = this.storageService.getData('token');
  }
  submit() {
    this.languageService.getLanguageDetection(this.text,this.clean,this.token).subscribe(res => {
      this.languageDetection = res;
    });
  }
}
