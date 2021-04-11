import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/Interfaces/Post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {
  @Input() posts: Post[];
  @Input() page: string;

  constructor() {}

  ngOnInit(): void {}
}
