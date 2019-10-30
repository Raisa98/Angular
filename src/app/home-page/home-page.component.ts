import {Component, OnInit} from '@angular/core';
import {HomepageService} from '../shared/homepage.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  card = [];

  constructor(private homepageService: HomepageService) {
  }

  ngOnInit() {
    this.card = this.homepageService.card;
  }

}
