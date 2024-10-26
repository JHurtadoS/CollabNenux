import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_ENDPOINT_PRODUCTION } from './Variables';


export interface Post {
  id: number;
  user_id: string;
  project_id: number;
  content: string;
  created_at: string;
  profiles: {
    id: string;
    full_name: string;
    avatar_url: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class PostFeedService {

  constructor(private http: HttpClient) { }

  getPosts(token: string | null): Observable<{ message: string; posts: Post[] }> {
    console.log(token)
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get<{ message: string; posts: Post[] }>(`${URL_ENDPOINT_PRODUCTION}/posts`, { headers });
  }
}
