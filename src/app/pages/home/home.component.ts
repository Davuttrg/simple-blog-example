import { Component, OnInit } from '@angular/core';
import { HomeSettings } from 'src/app/Interfaces/HomeSettings';
import { DataService } from './../../data.service';
import { Post } from './../../Interfaces/Post';
import { Author } from './../../Interfaces/Author';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  homeSettings: HomeSettings;
  posts: Post[];
  authors: Author[];
  isProccessing: boolean = true;
  sections = [
    { posts: [], title: '' },
    { posts: [], title: '' },
    { posts: [], title: '' },
  ];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getHomeSettings().subscribe((homeData: HomeSettings[]) => {
      this.homeSettings = homeData[0];

      this.getAllAuthor().subscribe((authors) => (this.authors = authors));

      this.getAllPost().subscribe((posts) => {
        this.isProccessing = false;
        this.posts = posts;
        this.fillSections();
      });
    });
  }

  getHomeSettings() {
    return this.dataService.getHomeSettings();
  }
  getAllAuthor() {
    return this.dataService.getAllAuthor();
  }
  getAllPost() {
    return this.dataService.getAllPost();
  }

  fillSections() {
    this.posts.forEach((post) => {
      switch (post.category._id) {
        case this.homeSettings.section1:
          if (this.sections[0].posts.length < 3)
            this.sections[0].posts.push(post);
          this.sections[0].title
            ? ''
            : (this.sections[0].title = post.category.title);
          break;
        case this.homeSettings.section2:
          if (this.sections[1].posts.length < 3)
            this.sections[1].posts.push(post);
          this.sections[1].title
            ? ''
            : (this.sections[1].title = post.category.title);
          break;
        case this.homeSettings.section3:
          if (this.sections[2].posts.length < 3)
            this.sections[2].posts.push(post);
          this.sections[2].title
            ? ''
            : (this.sections[2].title = post.category.title);
          break;
      }
    });
  }
}
