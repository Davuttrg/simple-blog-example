import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../environments/environment.prod';
import { Post } from './Interfaces/Post';
import { Category } from './Interfaces/Category';
import { Author } from './Interfaces/Author';
import { HomeSettings } from './Interfaces/HomeSettings';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  //--------------Post
  getAllPost() {
    return this.http.get<Post[]>(
      `${environment.api_url}/bucket/${environment.PostBucketId}/data?relation=category&relation=tags&sort:{"_id":-1}`
    );
  }
  getPostById(id) {
    return this.http.get<Post>(
      `${environment.api_url}/bucket/${environment.PostBucketId}/data/${id}?relation=true`
    );
  }
  getPostsByCategoryId(id) {
    return this.http.get<Post[]>(
      `${environment.api_url}/bucket/${environment.PostBucketId}/data?relation=tags&filter={"category":"${id}"}&sort:{"_id":-1}`
    );
  }
  getPostsByAuthor(id) {
    return this.http.get<Post[]>(
      `${environment.api_url}/bucket/${environment.PostBucketId}/data?relation=tags&filter={"author":"${id}"}&sort:{"_id":-1}`
    );
  }
  getPostsByRelatedTag(tags: [], id) {
    return this.http.get<Post[]>(
      `${environment.api_url}/bucket/${environment.PostBucketId}/data?relation=tags&filter={"tags":{"$in":${tags}},"_id":{"$ne":"${id}"}}&limit=5&sort:{"_id":-1}`
    );
  }

  //--------------Category
  getAllCategory() {
    return this.http.get<Category[]>(
      `${environment.api_url}/bucket/${environment.CategoryBucketId}/data?sort:{"_id":-1}`
    );
  }

  //--------------Author
  getAllAuthor() {
    return this.http.get<Author[]>(
      `${environment.api_url}/bucket/${environment.AuthorBucketId}/data?sort:{"_id":-1}`
    );
  }
  getAuthorById(id) {
    return this.http.get<Author>(
      `${environment.api_url}/bucket/${environment.AuthorBucketId}/data/${id}`
    );
  }

  //--------------Home Settings
  getHomeSettings() {
    return this.http.get<HomeSettings[]>(
      `${environment.api_url}/bucket/${environment.HomePageSettingsBucketId}/data`
    );
  }
}
