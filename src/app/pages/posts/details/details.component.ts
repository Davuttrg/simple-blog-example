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

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getPost(this.route.snapshot.params['id']).subscribe((post) => {
      this.post = post;
      let tagArr = [];
      this.post.tags.forEach((tag) => {
        tagArr.push(tag._id);
      });
      this.getPostsByRelatedTag(JSON.stringify(tagArr),this.post._id).subscribe(
        (posts) => (this.relatedPosts = posts)
      );
    });
  }
  getPost(id) {
    return this.dataService.getPostById(id);
  }
  getPostsByRelatedTag(tags,id) {
    return this.dataService.getPostsByRelatedTag(tags,id);
  }
}
