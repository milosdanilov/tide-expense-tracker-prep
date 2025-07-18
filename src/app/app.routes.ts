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
      import('./domains/account/feature-account/account.routes').then(
        (r) => r.routes
      ),
  },
];
