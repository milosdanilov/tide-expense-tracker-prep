import { patchState, signalStore, withMethods } from '@ngrx/signals';
import { tapResponse } from '@ngrx/operators';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { setAllEntities, withEntities } from '@ngrx/signals/entities';
import { Account } from '../data-access/accounts.model';
import { inject } from '@angular/core';
import { AccountsService } from '../data-access/accounts.service';
import { exhaustMap, pipe, tap } from 'rxjs';
import {
  setError,
  setFulfilled,
  setPending,
  withRequestStatus,
} from '../../shared/state/request-status.feature';

export const AccountsStore = signalStore(
  { providedIn: 'root' },
  withEntities<Account>(),
  withRequestStatus(),
  withMethods((store, accountsService = inject(AccountsService)) => ({
    loadAll: rxMethod<void>(
      pipe(
        tap(() => patchState(store, setPending())),
        exhaustMap(() => {
          return accountsService.getAll().pipe(
            tapResponse({
              next: (accounts) => {
                patchState(store, setAllEntities(accounts), setFulfilled());
              },
              error: (error) => {
                patchState(store, setError('Error while loading all accounts'));
              },
            })
          );
        })
      )
    ),
  }))
);
