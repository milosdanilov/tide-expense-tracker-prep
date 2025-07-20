import { Component, inject, input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { Account, AccountTypeEnum } from '../../../data-access/accounts.model';
import { MatButtonModule } from '@angular/material/button';
import { enumToOptions } from '../../../../shared/util/enum-to-options';

export interface AccountEditDialogData {
  account: Account;
}

@Component({
  selector: 'app-account-edit',
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './account-edit.html',
  styleUrl: './account-edit.css',
})
export class AccountEdit {
  private fb = inject(FormBuilder);
  private data: AccountEditDialogData = inject(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef<AccountEdit>);

  readonly accountTypeOptions = enumToOptions(AccountTypeEnum);

  form = this.fb.group({
    name: [this.data.account.name, Validators.required],
    type: [this.data.account.type, Validators.required],
  });

  save() {
    if (this.form.valid) {
      const value = this.form.value;
      this.dialogRef.close(value);
    }
  }
}
