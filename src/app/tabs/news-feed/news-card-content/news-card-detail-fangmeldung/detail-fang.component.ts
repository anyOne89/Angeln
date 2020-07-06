import { Component, OnInit } from '@angular/core';
import {CardModel} from "../../news-feed/model/card-model";
import {UserService} from "../../../../core/services/user.service";

@Component({
  selector: 'app-news-card-content',
  templateUrl: './detail-fang.component.html',
  styleUrls: ['./detail-fang.component.scss'],
})
export class DetailFangComponent implements OnInit {

  card: CardModel;

  constructor(public userService: UserService) { }

  ngOnInit() {}

}
