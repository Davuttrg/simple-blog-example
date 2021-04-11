import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Post } from 'src/app/Interfaces/Post';
import { Author } from './../../Interfaces/Author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
})
export class AuthorComponent implements OnInit {
  author: Author;
  posts: Post[];

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getAuthor(this.route.snapshot.params['id']).then(
      (data) => (this.author = data)
    );
    this.getAuthorPosts(this.route.snapshot.params['id']).then(
      (data) => (this.posts = data)
    );
  }
  getAuthor(id) {
    return this.dataService.getAuthorById(id).toPromise();
  }
  getAuthorPosts(id) {
    return this.dataService.getPostsByAuthor(id).toPromise();
  }
}
