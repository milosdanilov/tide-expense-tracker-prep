export type AccountType = 'Cash' | 'Checking account' | 'Savings account';

export type CurrencyType = 'USD';

export interface AccountDTO {
  id: string;
  name: string;
  type: AccountType;
  createdAt: Date;
  amount: number;
  currency: CurrencyType;
}
