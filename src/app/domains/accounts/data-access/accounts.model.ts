import e from 'express';
import { AccountDTO } from './accounts.dto';

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

export function toAccountModel(dto: AccountDTO): Account {
  return {
    ...dto,
    createdAt: new Date(dto.createdAt),
  };
}

export function toAccountModels(dtos: AccountDTO[]): Account[] {
  return dtos.map((dto) => toAccountModel(dto));
}

export function toAccountDTO(model: Account): AccountDTO {
  return {
    ...model,
    createdAt: model.createdAt.toISOString(),
  };
}

export function toAccountDTOs(models: Account[]): AccountDTO[] {
  return models.map((model) => toAccountDTO(model));
}
