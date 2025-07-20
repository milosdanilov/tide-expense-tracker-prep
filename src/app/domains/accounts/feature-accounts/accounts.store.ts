import { patchState, signalStore, withMethods } from '@ngrx/signals';
import { tapResponse } from '@ngrx/operators';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import {
  setAllEntities,
  withEntities,
  updateEntity,
} from '@ngrx/signals/entities';
import { Account } from '../data-access/accounts.model';
import { inject } from '@angular/core';
import { AccountsService } from '../data-access/accounts.service';
import { exhaustMap, pipe, switchMap, tap } from 'rxjs';
import {
  setError,
  setFulfilled,
  setPending,
  withRequestStatus,
} from '../../shared/state/request-status.feature';
import { AccountEditPayload } from '../data-access/accounts.dto';
import { NotificationService } from '../../shared/notification/notification';

export const AccountsStore = signalStore(
  { providedIn: 'root' },
  withEntities<Account>(),
  withRequestStatus(),
  withMethods(
    (
      store,
      accountsService = inject(AccountsService),
      notificationService = inject(NotificationService)
    ) => ({
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
                  patchState(
                    store,
                    setError('Error while loading all accounts')
                  );
                },
              })
            );
          })
        )
      ),
      editAccount: rxMethod<{ id: string; payload: AccountEditPayload }>(
        pipe(
          tap(() => patchState(store, setPending())),
          exhaustMap(({ id, payload }) => {
            return accountsService.update(id, payload).pipe(
              tapResponse({
                next: (account) =>
                  patchState(store, updateEntity({ id, changes: account })),
                error: () => {
                  notificationService.showError(
                    `Error while editing account: ${id}`
                  );
                },
              })
            );
          })
        )
      ),
      getAccountById: (id: string) => store.entityMap()[id] ?? null,
    })
  )
);
