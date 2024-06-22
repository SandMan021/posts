import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, map, switchMap } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { PostResponseWrapper } from 'src/app/models/post_response_wrapper.model';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  lstOfTags: string[] = [
    'history',
    'american',
    'crime',
    'magical',
    'french',
  ]
  selectedTag!: string;
  selectedPost!: Post;
  total!: number;

  currentPage$ = new BehaviorSubject<number>(1);
  listOfPosts$ = this.currentPage$.pipe(
    switchMap((val) => this.postService.getListOfPosts(val)),
    map((val: PostResponseWrapper) => {
      this.total = val.total;
      return val.posts;
    })
  )

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  get totalPages(): number {
    return Math.ceil(this.total / 10);
  }

  nextPage(): void {
    if (this.currentPage$.value < this.totalPages) {
      this.currentPage$.next(this.currentPage$.value + 1)
    }
  }

  previousPage(): void {
    if (this.currentPage$.value > 1) {
      this.currentPage$.next(this.currentPage$.value - 1);
    }
  }

}
