import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { HomeSettings } from './Interfaces/HomeSettings';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'simple-blog-example';
  homeSettings: HomeSettings;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService
      .getHomeSettings()
      .subscribe((data) => (this.homeSettings = data[0]));
  }
}
