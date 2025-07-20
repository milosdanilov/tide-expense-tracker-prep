import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {
  Account,
  AccountType,
  AccountTypeEnum,
} from '../../../data-access/accounts.model';
import { MatButtonModule } from '@angular/material/button';
import { enumToOptions } from '../../../../shared/util/enum-to-options';

export interface AccountEditDialogData {
  account: Account | null;
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
export class AccountEdit implements OnInit {
  private fb = inject(FormBuilder);
  private data: AccountEditDialogData = inject(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef<AccountEdit>);

  readonly accountTypeOptions = enumToOptions(AccountTypeEnum);

  get isEditMode() {
    return !!this.data.account;
  }

  form = this.fb.group<{
    name: FormControl<string>;
    type: FormControl<AccountType | ''>;
    amount?: FormControl<number | null>;
  }>({
    name: this.fb.nonNullable.control('', Validators.required),
    type: this.fb.nonNullable.control('', Validators.required),
    amount: this.fb.control(0),
  });

  ngOnInit(): void {
    if (this.isEditMode) {
      this.form.removeControl('amount');
    }

    const account = this.data.account;

    if (account) {
      this.form.patchValue({
        name: account.name,
        type: account.type,
      });
    }
  }

  save() {
    if (this.form.valid) {
      const value = this.form.value;
      this.dialogRef.close(value);
    }
  }
}
