import { Component, computed, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { AccountsStore } from '../accounts.store';
import { AccountList } from './account-list/account-list';
import { Account } from '../../data-access/accounts.model';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {
  AccountEdit,
  AccountEditDialogData,
} from './account-edit/account-edit';
import { filter } from 'rxjs';

@Component({
  selector: 'app-accounts-overview',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    AccountList,
    MatDialogModule,
  ],
  templateUrl: './accounts-overview.html',
  styleUrl: './accounts-overview.css',
})
export class AccountsOverview {
  readonly store = inject(AccountsStore);
  readonly dialog = inject(MatDialog);

  accounts = this.store.entities;
  error = this.store.error;

  constructor() {
    this.store.loadAll();
  }

  editAccount({ id }: Pick<Account, 'id'>) {
    this.dialog
      .open(AccountEdit, {
        data: {
          account: this.store.getAccountById(id),
        } as AccountEditDialogData,
      })
      .afterClosed()
      .pipe(filter((result) => !!result))
      .subscribe((result) => this.store.editAccount({ id, payload: result }));
  }

  addAccount() {
    this.dialog
      .open(AccountEdit, { data: { account: null } })
      .afterClosed()
      .subscribe((result) => this.store.addAccount(result));
  }
}
