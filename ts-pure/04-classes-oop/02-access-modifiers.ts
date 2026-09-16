class BankAccount {
  readonly id: number;
  public accountNumber: string;
  private balance: number;
  protected owner: string;
  constructor(id: number, accountNumber: string, owner: string, balance?: number) {
    this.id = id;
    this.accountNumber = accountNumber;
    this.balance = 0
    this.owner = owner;
  };
  public deposit(amount: number): void {
    this.balance += amount;
  };
  public withdrow(amount: number): boolean {
    if (this.balance < amount) {
      return false;
    }
    this.balance -= amount;
    console.log(`You have ${this.balance} money!`);
    return true;
  };
  public getBalacne(): number {
    return this.balance;
  }

}

const account: BankAccount = new BankAccount(123, '2345', 'vasia');
console.log(account.getBalacne());
account.deposit(10099);
console.log(account.withdrow(450));
console.log(account.getBalacne());
console.log(account.withdrow(200000));
console.log(account.getBalacne());
