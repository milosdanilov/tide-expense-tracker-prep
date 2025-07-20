import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import {
  Account,
  toAccountModel,
  toAccountModels,
  toAccountDTO,
} from './accounts.model';
import {
  AccountAddPayload,
  AccountDTO,
  AccountEditPayload,
} from './accounts.dto';
import { createAccount } from '../util/create-account';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  protected baseUrl = `${environment.apiUrl}/accounts`;

  private http = inject(HttpClient);

  getAll(): Observable<Account[]> {
    return this.http
      .get<AccountDTO[]>(this.baseUrl)
      .pipe(map((res) => toAccountModels(res)));
  }

  update(id: string, payload: AccountEditPayload) {
    return this.http
      .patch<AccountDTO>(`${this.baseUrl}/${id}`, payload)
      .pipe(map((res) => toAccountModel(res)));
  }

  create(payload: AccountAddPayload) {
    const account = toAccountDTO(createAccount(payload));

    return this.http
      .post<AccountDTO>(`${this.baseUrl}`, account)
      .pipe(map((res) => toAccountModel(res)));
  }
}
