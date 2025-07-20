export const AccountTypeEnum = {
  Cash: 'Cash',
  CheckingAccount: 'Checking account',
  SavingsAccount: 'Savings account',
} as const;

export type AccountType = keyof typeof AccountTypeEnum;

export type CurrencyType = 'USD' | 'EUR';

export interface Account {
  id: string;
  name: string;
  type: AccountType;
  createdAt: Date;
  amount: number;
  currency: CurrencyType;
}
