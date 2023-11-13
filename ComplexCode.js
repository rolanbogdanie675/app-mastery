// Filename: ComplexCode.js
//
// Description: This code demonstrates a sophisticated and elaborate JavaScript program.
// It creates a virtual banking system with multiple functionalities such as account creation,
// deposit and withdrawal transactions, balance inquiry, and transferring funds between accounts.

class Bank {
  constructor() {
    this.accounts = [];
  }

  createAccount(accountNumber, initialDeposit) {
    const newAccount = new BankAccount(accountNumber, initialDeposit);
    this.accounts.push(newAccount);
  }

  deposit(accountNumber, amount) {
    const account = this.findAccount(accountNumber);
    if (account) {
      account.balance += amount;
      console.log(`Deposited ${amount} into Account #${account.number}. New balance: ${account.balance}`);
    } else {
      console.log(`Account #${accountNumber} not found.`);
    }
  }

  withdraw(accountNumber, amount) {
    const account = this.findAccount(accountNumber);
    if (account) {
      if (account.balance >= amount) {
        account.balance -= amount;
        console.log(`Withdrawn ${amount} from Account #${account.number}. New balance: ${account.balance}`);
      } else {
        console.log(`Insufficient balance in Account #${account.number}.`);
      }
    } else {
      console.log(`Account #${accountNumber} not found.`);
    }
  }

  transfer(fromAccountNumber, toAccountNumber, amount) {
    const fromAccount = this.findAccount(fromAccountNumber);
    const toAccount = this.findAccount(toAccountNumber);

    if (!fromAccount || !toAccount) {
      console.log(`One or both accounts not found.`);
    } else {
      if (fromAccount.balance >= amount) {
        fromAccount.balance -= amount;
        toAccount.balance += amount;
        console.log(`Transferred ${amount} from Account #${fromAccount.number} to Account #${toAccount.number}.`);
      } else {
        console.log(`Insufficient balance in Account #${fromAccount.number}.`);
      }
    }
  }

  findAccount(accountNumber) {
    for (let i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].number === accountNumber) {
        return this.accounts[i];
      }
    }
    return null;
  }
}

class BankAccount {
  constructor(accountNumber, initialDeposit) {
    this.number = accountNumber;
    this.balance = initialDeposit;
  }
}

// Usage
const bank = new Bank();

bank.createAccount(12345, 1000);
bank.createAccount(67890, 500);

bank.deposit(12345, 500);
bank.withdraw(12345, 250);
bank.transfer(12345, 67890, 300);

const account1 = bank.findAccount(12345);
const account2 = bank.findAccount(67890);
console.log("Account #12345 balance:", account1.balance);
console.log("Account #67890 balance:", account2.balance);

// Output
// Deposited 500 into Account #12345. New balance: 1500
// Withdrawn 250 from Account #12345. New balance: 1250
// Transferred 300 from Account #12345 to Account #67890.
// Account #12345 balance: 950
// Account #67890 balance: 800

// ...Continued with additional features and functionalities...