import {Component, OnInit} from '@angular/core';
import {Token} from "../../model/token";
import {StorageService} from "../../service/storage.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public token!: Token;

  constructor(private storageService: StorageService) {
    this.token = new Token();
  }

  ngOnInit(): void {

  }

  submit() {
    this.storageService.saveData('token', this.token.tokenString);
    this.token.tokenString = '';
  }
}
