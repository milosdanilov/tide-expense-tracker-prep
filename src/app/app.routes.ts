import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'accounts',
    pathMatch: 'full',
  },
  {
    path: 'accounts',
    loadChildren: () =>
      import('./domains/accounts/feature-accounts/accounts.routes').then(
        (r) => r.routes
      ),
  },
];
