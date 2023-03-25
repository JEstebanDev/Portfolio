import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetAllRepositories } from '../interface/getAllRepositories.interface';
import { TransferStateService } from '@scullyio/ng-lib';

@Injectable({
  providedIn: 'root',
})
export class GitHubService {
  private _urlBackendApi: string =
    'https://api.github.com/users/jestebandev/repos?sort=created';

  constructor(
    private http: HttpClient,
    private transferState: TransferStateService
  ) {}

  getListAdditional() {
    return this.transferState.useScullyTransferState(
      'projects',
      this.http.get<GetAllRepositories>(`${this._urlBackendApi}`)
    );
  }
}
