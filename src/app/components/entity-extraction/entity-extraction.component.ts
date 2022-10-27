import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../service/storage.service";
import {EntityExtractionService} from "../../service/entity-extraction.service";
import {Entity} from "../../model/entity";
import {Options} from "@angular-slider/ngx-slider";
import {HistoryService} from "../../service/history.service";

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent implements OnInit {

  text: string;
  token: string;
  entity!: Entity;

  atributes: string[] = [];
  atributesBoolean: boolean[]=[];

  value: number = 0.5;
  options: Options = {
    floor: 0,
    ceil: 1,
    step: 0.01
  };

  constructor(private storageService: StorageService,
              private entityService: EntityExtractionService,
              private historyService: HistoryService) {
    this.text = '';
    this.token = '';
    this.atributes = ['image', 'abstract', 'categories'];
    this.atributesBoolean = [true,true,true];
  }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.token = this.storageService.getData('token');
    console.log(this.storageService.getData('token'));
  }

  buildIncludeQuery(): any{
    var chosenAtributes: string[] = [];
    for (let i = 0; i < this.atributesBoolean.length; i++) {
      if((this.atributesBoolean)[i]==true){
        chosenAtributes.push(this.atributes[i]);
      }
    }
    return chosenAtributes
  }

  submit() {
    console.log(this.buildIncludeQuery())
    let url =
    this.entityService.getEntities(this.text, this.buildIncludeQuery(), this.value, this.storageService.getData('token')).subscribe(res => {
      this.entity = res;
    });
  }
}
