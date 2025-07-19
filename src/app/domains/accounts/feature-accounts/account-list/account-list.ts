import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CurrencyPipe } from '@angular/common';

import { AccountsStore } from '../accounts.store';

@Component({
  selector: 'app-account-list',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    CurrencyPipe,
  ],
  templateUrl: './account-list.html',
  styleUrl: './account-list.css',
})
export class AccountList {
  readonly store = inject(AccountsStore);

  accounts = this.store.entities;
  error = this.store.error;

  constructor() {
    this.store.loadAll();
  }
}
