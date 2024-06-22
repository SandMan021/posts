import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { PostResponseWrapper } from '../models/post_response_wrapper.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url: string = 'https://dummyjson.com/posts/search';

  constructor(private http: HttpClient) { }

  getListOfPosts(skipIndex: number): Observable<PostResponseWrapper> {
    return this.http.get<PostResponseWrapper>(this.url, {
      params: {
        limit: 10,
        skip: (skipIndex - 1) * 10
      },
    })
  }
}
