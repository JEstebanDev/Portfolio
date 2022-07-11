import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetAllRepositories } from '../interface/getAllRepositories.interface';

@Injectable({
  providedIn: 'root',
})
export class GitHubService {
  private _urlBackendApi: string =
    'https://api.github.com/users/jestebancdev/repos?sort=created';

  constructor(private http: HttpClient) {}

  getListAdditionals() {
    return this.http.get<GetAllRepositories>(`${this._urlBackendApi}`);
  }
}
