export type AccountType = 'Cash' | 'CheckingAccount' | 'SavingsAccount';

export type CurrencyType = 'USD' | 'EUR';

export interface AccountDTO {
  id: string;
  name: string;
  type: AccountType;
  createdAt: string;
  amount: number;
  currency: CurrencyType;
}

export type AccountEditPayload = Pick<AccountDTO, 'id' | 'name' | 'type'>;

export type AccountAddPayload = Pick<AccountDTO, 'name' | 'type' | 'amount'>;
