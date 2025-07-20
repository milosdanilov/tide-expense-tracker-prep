import { Account } from '../data-access/accounts.model';
import { v4 as uuidv4 } from 'uuid';
import { AccountCreateForm } from '../feature-accounts/account.model';

export function createAccount(partial: AccountCreateForm): Account {
  return {
    ...partial,
    id: uuidv4(),
    createdAt: new Date(),
    currency: 'USD',
  };
}
