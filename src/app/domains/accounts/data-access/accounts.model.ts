export type AccountType = 'Cash' | 'Checking account' | 'Savings account';

export type CurrencyType = 'USD';

export interface Account {
  id: string;
  name: string;
  type: AccountType;
  createdAt: Date;
  amount: number;
  currency: CurrencyType;
}
