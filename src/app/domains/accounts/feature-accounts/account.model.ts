import { Account } from '../data-access/accounts.model';

export type AccountFormEdit = Pick<Account, 'id' | 'name' | 'type'>;

export type AccountCreateForm = Pick<Account, 'name' | 'type' | 'amount'>;
