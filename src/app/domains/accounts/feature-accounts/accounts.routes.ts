import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./accounts-overview/accounts-overview').then(
        (c) => c.AccountsOverview
      ),
    title: 'Accounts',
  },
];
