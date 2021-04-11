import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Observable } from 'rxjs';
import { Category } from 'src/app/Interfaces/Category';
import { HomeSettings } from './../../Interfaces/HomeSettings';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
})
export class NavigatorComponent implements OnInit {
  categoriesData$: Observable<Category[]>;
  homeSettings: HomeSettings;
  active_page: string='/';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.categoriesData$ = this.dataService.getAllCategory();
    this.dataService
      .getHomeSettings()
      .subscribe((data) => (this.homeSettings = data[0]));
  }
}
