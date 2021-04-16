import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/Interfaces/Post';
import { DataService } from './../../data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: Post[];
  isProccessing: boolean = true;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((routeParams) => {
      this.isProccessing = true;;
      this.dataService
        .getPostsByCategoryId(routeParams.id)
        .subscribe((data) => {
          this.posts = data;
          this.isProccessing = false;
        });
    });
  }
}
