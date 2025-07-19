import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./account-list/account-list').then((c) => c.AccountList),
    title: 'Accounts',
  },
];
