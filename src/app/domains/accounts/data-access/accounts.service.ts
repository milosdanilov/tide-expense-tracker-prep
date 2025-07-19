import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from './accounts.model';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  protected baseUrl = `${environment.apiUrl}/accounts`;

  private http = inject(HttpClient);

  getAll(): Observable<Account[]> {
    return this.http.get<Account[]>(this.baseUrl);
  }
}
