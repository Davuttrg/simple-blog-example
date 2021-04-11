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

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.dataService
      .getPostById(this.route.snapshot.params['id'])
      .subscribe((data) => (this.post = data));
  }
}
