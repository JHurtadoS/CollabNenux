import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_ENDPOINT_PRODUCTION } from './Variables';


export interface Project {
  id: number;
  name: string;
  description: string;
  tags: string[] | null;
  owner_id: string;
  visibility: boolean;
  state: string;
  created_at: string;
  updated_at: string;
}

export interface ProjectResponse {
  message: string;
  projects: Project[];
}


@Injectable()
export class ProjectServiceForUsersService {
  constructor(private http: HttpClient) { }

  getProjects(userId: string, token: string): Observable<ProjectResponse> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get<ProjectResponse>(`${URL_ENDPOINT_PRODUCTION}/projects/${userId}`, { headers });
  }
}
