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
  sections = [
    { posts: [], title: '' },
    { posts: [], title: '' },
    { posts: [], title: '' },
  ];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getHomeSettings().subscribe((homeData: HomeSettings[]) => {
      this.homeSettings = homeData[0];
      this.dataService
        .getAllAuthor()
        .subscribe((authors) => (this.authors = authors));
      this.dataService.getAllPost().subscribe((posts) => {
        this.posts = posts;
        this.fillSections();
      });
    });
  }

  fillSections() {
    this.posts.forEach((post) => {
      switch (post.category._id) {
        case this.homeSettings.sections.section1.postlist:
          this.sections[0].posts.push(post);
          this.sections[0].title
            ? ''
            : (this.sections[0].title = post.category.title);
          break;
        case this.homeSettings.sections.section2.postlist:
          this.sections[1].posts.push(post);
          this.sections[1].title
            ? ''
            : (this.sections[1].title = post.category.title);
          break;
        case this.homeSettings.sections.section3.postlist:
          this.sections[2].posts.push(post);
          this.sections[2].title
            ? ''
            : (this.sections[2].title = post.category.title);
          break;
      }
    });
  }
}
