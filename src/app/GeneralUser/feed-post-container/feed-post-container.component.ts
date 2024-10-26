import { Component, Input } from '@angular/core';
import { Post } from 'src/app/services/post-feed.service';

@Component({
  selector: 'app-feed-post-container',
  templateUrl: './feed-post-container.component.html',
  styleUrls: ['./feed-post-container.component.css']
})
export class FeedPosContainerComponent {
  @Input() posts: Post[] = [];
  @Input() loadingPosts: boolean = false;

}
