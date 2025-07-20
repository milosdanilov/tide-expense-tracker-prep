import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CurrencyPipe } from '@angular/common';
import { Account } from '../../../data-access/accounts.model';

@Component({
  selector: 'app-account-list',
  imports: [MatButtonModule, MatListModule, MatIconModule, CurrencyPipe],
  templateUrl: './account-list.html',
  styleUrl: './account-list.css',
})
export class AccountList {
  accounts = input<Account[]>();

  edit = output<Pick<Account, 'id'>>();

  onEdit(account: Account) {
    this.edit.emit({ id: account.id });
  }
}
