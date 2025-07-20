import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsOverview } from './accounts-overview';

describe('AccountsOverview', () => {
  let component: AccountsOverview;
  let fixture: ComponentFixture<AccountsOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountsOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountsOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
