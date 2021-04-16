import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Interfaces/Post';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './../../../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  post: Post;
  relatedPosts: Post[];
  isProccessing: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((routeParams) => {
      this.isProccessing = true;
      this.getPost(routeParams.id).subscribe((post) => {
        this.post = post;
        let tagArr = [];
        this.post.tags.forEach((tag) => {
          tagArr.push(tag._id);
        });
        this.getPostsByRelatedTag(
          JSON.stringify(tagArr),
          this.post._id
        ).subscribe((posts) => {
          this.relatedPosts = posts;
          this.isProccessing = false;
        });
      });
    });
  }
  getPost(id) {
    return this.dataService.getPostById(id);
  }
  getPostsByRelatedTag(tags, id) {
    return this.dataService.getPostsByRelatedTag(tags, id);
  }
}
