import { Component, Input } from '@angular/core';
import { Post } from 'src/app/services/post-feed.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {

  @Input() post!: Post;

  // ngOnInit(): void { }

}
